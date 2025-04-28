import { Bot } from "grammy";
// import { hydrateFiles } from '@grammyjs/files';
import 'dotenv/config';

const TELEGRAM_TOKEN: string = process.env.TELEGRAM_TOKEN ?? '';

const bot = new Bot(TELEGRAM_TOKEN);
// bot.api.config.use(hydrateFiles(bot.token))

import { inline, reply } from './utils/buttons/keyboards'
import HandlersKeyboard from './utils/buttons/actions'

const keyboards = new HandlersKeyboard(bot)
keyboards.registerKeyboardHooks()

import notionActions from "./api/notion";
import { deleteMessage } from "./utils/messages";
import { parseForwardedMessage } from "./utils/messages/forwardMessage"
import { ParsedForward } from "./utils/messages/types"
import { isForwardMessage } from './helpers/isForwardMessage'


// You can now register listeners on your bot object `bot`.
// grammY will call the listeners when users send messages to your bot.

// Handle the /start command.
// bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));
bot.command('start', async ctx => {
    await ctx.reply('keyboard', {reply_markup: reply.startKeyboard})
})

bot.command('start1', async ctx => {
    await ctx.reply('keyboard', {reply_markup: reply.keyboard})
})

// call after click one of notes
// bot.command('start1', async ctx => {
//     await ctx.reply('keyboard', {reply_markup: actionNotesKeyboard})
// })

// Handle other messages.

bot.on("message", async ctx => {
    // TODO: it's make open inline keyboard
    // await ctx.reply('inline keyboard', {reply_markup: inline.keyboard})
    deleteMessage(ctx)

    if(isForwardMessage(ctx)){
        await parseForwardedMessage(ctx, bot.token, (parsed: ParsedForward | boolean) => {
            if(parsed) console.log("Готовый результат:", parsed);
        })
    } else {
        const text = ctx.update.message.text ?? ''
        await notionActions.create('new test page 26apr', text, ['lol', 'kek'])
    }



    // forwardMessage
    //     ? console.log('forwardMessage')
    //     : console.log('not')

});
// Now that you specified how to handle messages, you can start your bot.
// This will connect to the Telegram servers and wait for messages.

// Start the bot.
bot.start();