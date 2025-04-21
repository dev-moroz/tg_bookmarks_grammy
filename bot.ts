import {Bot} from "grammy";
import 'dotenv/config';

import {replyKeyboard, startReplyKeyboard} from "./utils/buttons/replyKeyboard";
import {inlineKeyboard} from "./utils/buttons/inlineKeyboard";
import HandlersKeyboard from './utils/buttons/actions/index'

const TELEGRAM_TOKEN: string = process.env.TELEGRAM_TOKEN ?? '';

const bot = new Bot(TELEGRAM_TOKEN);
const keyboards = new HandlersKeyboard(bot)

keyboards.registerHandlersKeyboard()

// You can now register listeners on your bot object `bot`.
// grammY will call the listeners when users send messages to your bot.

// Handle the /start command.
// bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));
bot.command('start', async ctx => {
    await ctx.reply('keyboard', {reply_markup: startReplyKeyboard})
})

bot.command('start1', async ctx => {
    await ctx.reply('keyboard', {reply_markup: replyKeyboard})
})

// Handle other messages.
bot.on("message", async ctx =>
        await ctx.reply('inline keyboard', {reply_markup: inlineKeyboard})
    // ctx.reply("Got another message!")
);

// Now that you specified how to handle messages, you can start your bot.
// This will connect to the Telegram servers and wait for messages.

// Start the bot.
bot.start();