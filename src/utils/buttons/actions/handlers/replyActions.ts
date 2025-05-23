import { Context } from 'grammy';
import { deleteMessage } from '../../../messages';

export async function handleCloseReply(ctx: Context) {
  if (ctx.message) {
    await ctx.api.deleteMessage(ctx.chat!.id, ctx.message.message_id);
  }
  await ctx.reply('...', {
    reply_markup: { remove_keyboard: true },
    disable_notification: true,
  });
}

export async function handleShowLastFive(ctx: Context) {
  deleteMessage(ctx);
  ctx.reply('Show last Five');
}

export async function handleFindNotesByTag(ctx: Context) {
  deleteMessage(ctx);
  ctx.reply('Find Notes By Tag');
}

export async function handleShowMessagesEdit(ctx: Context) {
  deleteMessage(ctx);
  ctx.reply('handleShowMessagesEdit');
}
export async function handleShowMessagesDelete(ctx: Context) {
  deleteMessage(ctx);
  ctx.reply('handleShowMessagesDelete');
}
export async function handleShowMessagesPin(ctx: Context) {
  deleteMessage(ctx);
  ctx.reply('handleShowMessagesPin');
}
export async function handleShowMessagesBack(ctx: Context) {
  deleteMessage(ctx);
  ctx.reply('handleShowMessagesBack');
}
