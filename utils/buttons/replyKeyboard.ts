import {Keyboard} from "grammy";
import {Button, IButton} from "@loskir/grammy-markup";
import * as buttonsTypes from './buttonsTypes';
import buttons from "./buttons";
import {createReplyKeyboard} from "./createKeyboard";

const replyKeyboard = new Keyboard([
    [Button.text('text')],
    [IButton.text(buttons[buttonsTypes.SERVICES_CLOSE_MENU])],
])

const startReplyKeyboard = createReplyKeyboard([
        [Button.text(buttons[buttonsTypes.SHOW_LAST_FIVE])],
        [Button.text(buttons[buttonsTypes.FIND_NOTES_BY_TAG])],
    ], { oneTime: true, resize: true })

export {replyKeyboard, startReplyKeyboard};