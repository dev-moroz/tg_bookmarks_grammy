import {IButton} from "@loskir/grammy-markup";
import * as buttonsTypes from './buttonsTypes';
import buttons from "./buttons";
import {createInlineKeyboard} from "./createKeyboard";

const inlineKeyboard = createInlineKeyboard([
    [IButton.text(buttons[buttonsTypes.SERVICES_CLOSE_MENU], buttonsTypes.SERVICES_CLOSE_MENU)],
])

export {inlineKeyboard};
// ctx.reply('inline keyboard', {reply_markup: inlineKeyboard})