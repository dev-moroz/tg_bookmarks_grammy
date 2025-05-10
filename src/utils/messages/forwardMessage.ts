import { Context } from 'grammy';
import type { Result, AlbumRecord, ParsedForward } from './types';
import { isForwardFromChat, isForwardFromUser } from '../../helpers/isForwardMessage';

const albumStore = new Map<string, AlbumRecord>();

export function parseForwardedMessage(
  ctx: Context,
  botToken: string,
  onResult: (parsed: ParsedForward | boolean) => void,
): void {
  const message = ctx.message;
  // It's not message
  if (!message) return onResult(false);

  const result: Result = {
    senderName: null,
    postUrl: null,
    mediaUrls: [],
    text: null,
  };

  result.text = message.text ?? message.caption ?? null;

  if (isForwardFromChat(message)) {
    result.senderName = message.forward_from_chat.title ?? null;

    if (message.forward_from_chat.username) {
      result.postUrl = `https://t.me/${message.forward_from_chat.username}/${message.forward_from_message_id}`;
    }
  } else if (isForwardFromUser(message)) {
    const user = message.forward_from;
    result.senderName = [user.first_name, user.last_name].filter(Boolean).join(' ');
  } else {
    // It's not forward message
    return onResult(false);
  }

  const fileLink = async (fileId: string): Promise<string> => {
    const file = await ctx.api.getFile(fileId);
    return `https://api.telegram.org/file/bot${botToken}/${file.file_path}`;
  };

  const collectMedia = async () => {
    if (message.photo) {
      const p = message.photo[message.photo.length - 1];
      result.mediaUrls.push(await fileLink(p.file_id));
    }
    if (message.video) {
      result.mediaUrls.push(await fileLink(message.video.file_id));
    }
    if (message.document) {
      result.mediaUrls.push(await fileLink(message.document.file_id));
    }
  };

  collectMedia().then(() => {
    const groupId = message.media_group_id;

    if (!groupId) {
      onResult(result);
      return;
    }
    const existing = albumStore.get(groupId);
    if (!existing) {
      // First file in group
      const timer = setTimeout(() => {
        albumStore.delete(groupId);
        onResult(record.items);
      }, 1000);

      const record = {
        items: { ...result, mediaUrls: [...result.mediaUrls] },
        timer,
      };
      albumStore.set(groupId, record as AlbumRecord);
    } else {
      // The same group file
      clearTimeout(existing.timer);

      // add links
      existing.items.mediaUrls.push(...result.mediaUrls);

      // update text if it empty
      if (!existing.items.text && result.text) {
        existing.items.text = result.text;
      }

      // restart timer
      existing.timer = setTimeout(() => {
        albumStore.delete(groupId);
        onResult(existing.items);
      }, 500);
    }
  });
}
