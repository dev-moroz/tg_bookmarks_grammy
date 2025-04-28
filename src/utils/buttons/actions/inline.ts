import { Bot } from 'grammy'
import * as buttonsTypes from "../buttonsTypes";
import { handleCloseInline } from "./handlers/inlineActions";

export default class Inline {
    constructor(protected bot: Bot) {}

    messageHook(){
        this.bot.callbackQuery(buttonsTypes.SERVICES_CLOSE_MENU, handleCloseInline)
    }
}