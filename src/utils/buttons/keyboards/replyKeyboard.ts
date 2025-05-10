import { Keyboard } from 'grammy';
import { Button, IButton } from '@loskir/grammy-markup';
import * as buttonsTypes from '../buttonsTypes';
import buttons from '../buttons';
import { createReplyKeyboard } from './createKeyboard';

const keyboard = new Keyboard([
  [Button.text('text')],
  [IButton.text(buttons[buttonsTypes.SERVICES_CLOSE_MENU])],
]);

const startKeyboard = createReplyKeyboard(
  [
    [Button.text(buttons[buttonsTypes.SHOW_LAST_FIVE])],
    [Button.text(buttons[buttonsTypes.FIND_NOTES_BY_TAG])],
  ],
  { oneTime: true, resize: true },
);

const actionNotesKeyboard = createReplyKeyboard([
  [Button.text(buttons[buttonsTypes.SHOW_MESSAGES_EDIT])],
  [Button.text(buttons[buttonsTypes.SHOW_MESSAGES_DELETE])],
  [Button.text(buttons[buttonsTypes.SHOW_MESSAGES_PIN])],
  [Button.text(buttons[buttonsTypes.SHOW_MESSAGES_BACK])],
]);

export { keyboard, startKeyboard, actionNotesKeyboard };
