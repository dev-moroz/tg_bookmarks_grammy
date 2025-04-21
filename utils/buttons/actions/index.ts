import { Bot } from 'grammy'

import buttons from "../buttons";
import * as buttonsTypes from "../buttonsTypes";

import {handleCloseInline} from './inlineActions'
import {handleCloseReply, handleFindNotesByTag, handleShowLastFive} from './replyActions'

export default class HandlersKeyboard {
    constructor(private bot: Bot) {}

    registerHandlersKeyboard() {
        //reply keyboards
        this.bot.hears(buttons[buttonsTypes.SERVICES_CLOSE_MENU], handleCloseReply)
        this.bot.hears(buttons[buttonsTypes.SHOW_LAST_FIVE], handleShowLastFive)
        this.bot.hears(buttons[buttonsTypes.FIND_NOTES_BY_TAG], handleFindNotesByTag)

        //inline keyboards
        this.bot.callbackQuery(buttonsTypes.SERVICES_CLOSE_MENU, handleCloseInline)
        this.bot.callbackQuery(buttonsTypes.SHOW_LAST_FIVE, handleShowLastFive)
    }
}