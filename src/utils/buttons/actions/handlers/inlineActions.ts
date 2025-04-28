import { Context } from "grammy";

export async function handleCloseInline(ctx: Context) {
    try {
        //@ts-ignore
        await ctx.editMessageReplyMarkup(null)
    } catch (error: any) {
        const msg = error?.description ?? error?.message ?? ''

        // typical unfiltered message: keyboard already deleted
        const isNotModified = msg.includes('message is not modified')

        if (!isNotModified) {
            console.warn('Ошибка при удалении inline-клавиатуры:', error)
        }
    }
}