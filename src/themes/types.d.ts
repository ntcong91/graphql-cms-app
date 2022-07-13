type TFontKey = 'regular' | 'medium' | 'light' | 'thin';

interface IFontFamily {
  fontFamily: string;
}
type IFontConfig = {
  [key in TFontKey]: IFontFamily;
};
