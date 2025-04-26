import { Bot } from 'grammy'
import Inline from './inline'
import Reply from './reply'

export default class HandlersKeyboard {
    private inline: Inline;
    private reply: Reply;

    constructor(bot: Bot) {
        this.inline = new Inline(bot);
        this.reply = new Reply(bot);
    }

    registerKeyboardHooks() {
        //reply keyboards
        this.reply.startHook()
        this.reply.actionNotesHook()

        //inline keyboards
        this.inline.messageHook()
    }
}