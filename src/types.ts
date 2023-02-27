// =========================================================
// Enums.
// =========================================================
export enum Color {
  BLACK = 'black',
  WHITE = 'white',
  ERROR = 'error',
  TRANSPARENT = 'transparent',
  GRAY_900 = 'gray900',
  GRAY_800 = 'gray800',
  GRAY_700 = 'gray700',
  GRAY_600 = 'gray600',
  GRAY_500 = 'gray500',
  GRAY_400 = 'gray400',
  GRAY_300 = 'gray300',
  GRAY_200 = 'gray200',
  GRAY_100 = 'gray100',
  GRAY_50 = 'gray50',
  DIM = 'dim'
}

export enum FontWeight {
  THIN = 'thin',
  EXTRA_LIGHT = 'extraLight',
  LIGHT = 'light',
  REGULAR = 'regular',
  MEDIUM = 'medium',
  SEMI_BOLD = 'semiBold',
  BOLD = 'bold',
  EXTRA_BOLD = 'extraBold',
  BLACK = 'black'
}

export enum TextElement {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
  PARAGRAPH = 'p',
  SPAN = 'span',
  EMPHASIS = 'em',
  STRONG = 'strong',
  DELETE = 'del'
}

export enum TextType {
  LARGE_HEADING = 'largeHeading',
  HEADING1 = 'heading1',
  HEADING2 = 'heading2',
  HEADING3 = 'heading3',
  PARAGRAPH = 'paragraph',
  PARAGRAPH2 = 'paragraph2',
  CAPTION = 'caption'
}

export enum InputType {
  TEXT = 'text',
  NUMBER = 'number',
  EMAIL = 'email',
  PASSWORD = 'password',
  PHONE = 'phone',
  HIDDEN = 'hidden',
  RADIO = 'radio',
  CHECKBOX = 'checkbox',
}

export enum ButtonType {
  REGULAR = 'button',
  SUBMIT = 'submit'
}

export enum ToastType {
  NOTE = 1,
  ERROR = 2,
  WARNING = 3,
  SUCCESS = 4
}

export enum TextAlignment {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right'
}

// =========================================================
// Interfaces.
// =========================================================
export interface GenericMap {
  // eslint-disable-next-line
  [key: string]: any;
}

export interface SelectOption {
  value: string;
  text: string;
}
