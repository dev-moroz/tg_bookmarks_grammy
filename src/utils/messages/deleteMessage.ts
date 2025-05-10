import { Context } from 'grammy';

export const deleteMessage = async (ctx: Context) => {
  if (ctx.message) {
    await ctx.api.deleteMessage(ctx.chat!.id, ctx.message.message_id);
  }
};
