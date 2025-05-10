import { Context } from 'grammy';
import type { Message, Chat, User } from 'grammy/types';

const isForwardFromChat = (
  message: Message,
): message is Message & { forward_from_chat: Chat; forward_from_message_id: number } => {
  return (
    'forward_from_chat' in message &&
    'forward_from_message_id' in message &&
    Boolean(message.forward_from_chat && message.forward_from_message_id)
  );
};

const isForwardFromUser = (message: Message): message is Message & { forward_from: User } => {
  return 'forward_from' in message && Boolean(message.forward_from);
};

const isForwardMessage = (ctx: Context) => {
  const message: Message = ctx.message as Message;
  const forward_from_chat = isForwardFromChat(message);
  const forward_from_user = isForwardFromUser(message);

  return forward_from_chat || forward_from_user;
};

export { isForwardMessage, isForwardFromChat, isForwardFromUser };
