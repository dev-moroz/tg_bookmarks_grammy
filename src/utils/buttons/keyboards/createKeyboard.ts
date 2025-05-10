import { Keyboard, InlineKeyboard } from 'grammy';

type ReplyButton = {
  text: string;
  request_contact?: boolean;
  request_location?: boolean;
  request_poll?: {
    type: 'quiz' | 'regular';
  };
};

type ReplyKeyboardInput = ReplyButton[][];

function createReplyKeyboard(
  buttons: ReplyKeyboardInput,
  options?: {
    oneTime?: boolean;
    resize?: boolean;
  },
) {
  const keyboard = new Keyboard();

  for (const row of buttons) {
    for (const btn of row) {
      keyboard.add(btn);
    }
    keyboard.row();
  }

  // Поддержка старой и новой версии grammy
  if (typeof (keyboard as any).resize === 'function') {
    if (options?.resize === true) {
      (keyboard as any).resize();
    }
  } else if (typeof (keyboard as any).resized === 'function') {
    if (options?.resize === true) {
      (keyboard as any).resized(true);
    }
  }
  if (typeof (keyboard as any).oneTime === 'function') {
    if (options?.oneTime === true) {
      (keyboard as any).oneTime();
    }
  } else if (typeof (keyboard as any).oneTime === 'function') {
    if (options?.oneTime === true) {
      (keyboard as any).oneTime(true);
    }
  }

  return keyboard;
}

type InlineButton = {
  text: string;
  callback_data: string;
};

type InlineKeyboardInput = InlineButton[][];

function createInlineKeyboard(buttons: InlineKeyboardInput) {
  const keyboard = new InlineKeyboard();

  buttons.forEach((row) => {
    row.forEach((btn) => {
      keyboard.text(btn.text, btn.callback_data);
    });
    keyboard.row();
  });

  return keyboard;
}

export { createReplyKeyboard, createInlineKeyboard };
