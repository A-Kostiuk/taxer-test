export interface ITheme {
  colors: Colors;
  font: Font;
  maxWidth: string;
  pageIndents: string;
  viewWindowHeight: string;
}

interface Font {
  fontFamily: string;
  fontSize: string;
  lineHeight: string;
  fontWeight: string;
}

interface Colors {
  baseWhite: string;
  baseBlack: string;
  grey100: string;
}
