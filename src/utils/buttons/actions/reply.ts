import { Bot } from 'grammy';
import * as buttonsTypes from '../buttonsTypes';
import buttons from '../buttons';
import {
  handleCloseReply,
  handleFindNotesByTag,
  handleShowLastFive,
  handleShowMessagesBack,
  handleShowMessagesDelete,
  handleShowMessagesEdit,
  handleShowMessagesPin,
} from './handlers/replyActions';

export default class Reply {
  constructor(protected bot: Bot) {}

  startHook() {
    this.bot.hears(buttons[buttonsTypes.SHOW_LAST_FIVE], handleShowLastFive);
    this.bot.hears(buttons[buttonsTypes.FIND_NOTES_BY_TAG], handleFindNotesByTag);
    this.bot.hears(buttons[buttonsTypes.SERVICES_CLOSE_MENU], handleCloseReply);
  }

  actionNotesHook() {
    this.bot.hears(buttons[buttonsTypes.SHOW_MESSAGES_EDIT], handleShowMessagesEdit);
    this.bot.hears(buttons[buttonsTypes.SHOW_MESSAGES_DELETE], handleShowMessagesDelete);
    this.bot.hears(buttons[buttonsTypes.SHOW_MESSAGES_PIN], handleShowMessagesPin);
    this.bot.hears(buttons[buttonsTypes.SHOW_MESSAGES_BACK], handleShowMessagesBack);
  }
}
