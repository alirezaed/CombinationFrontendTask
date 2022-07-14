import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    headerHeight: string;
    paddings:Array<number>;
    margins:Array<number>;
    colors: {
      main: string;
      secondary: string;
      light: string;
      lighter: string;
      white: string;
    };
  }
}