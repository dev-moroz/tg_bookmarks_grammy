import { Context } from "grammy";
import type { Message } from 'grammy/types';

const isForwardMessage = (ctx: Context) => {
    const message: Message = ctx.message as Message;

    return (('forward_from_chat' in message && message.forward_from_chat) || ('forward_from' in message && message.forward_from))

    // export default isForwardMessage = (ctx: Context) => {
    //     const message: Message = ctx.message as Message;
    //
    //     function isForwardFromChat(message: Message): message is Message & { forward_from_chat: Chat; forward_from_message_id: number } {
    //         return ('forward_from_chat' in message) && ('forward_from_message_id' in message) && Boolean(message.forward_from_chat && message.forward_from_message_id);
    //     }
    //
    //     function isForwardFromUser(message: Message): message is Message & { forward_from: User } {
    //         return ('forward_from' in message) && Boolean(message.forward_from);
    //     }
    //     message is Message & { forward_from_chat: Chat }
    // }

}

export { isForwardMessage }
