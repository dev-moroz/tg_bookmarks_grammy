import { IButton } from "@loskir/grammy-markup";
import * as buttonsTypes from '../buttonsTypes';
import buttons from "../buttons";
import { createInlineKeyboard } from "./createKeyboard";

const keyboard = createInlineKeyboard([
    [IButton.text(buttons[buttonsTypes.SERVICES_CLOSE_MENU], buttonsTypes.SERVICES_CLOSE_MENU)],
])

export { keyboard };
// ctx.reply('inline keyboard', {reply_markup: inlineKeyboard})