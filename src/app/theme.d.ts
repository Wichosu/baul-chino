import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      blue: string
      blueHover: string
      white: string
      whiteBackground: string
      black: string
    }
    fontSizes: {
      extraSmall: string
      small: string
      medium: string
      large: string
      extraLarge: string
    }
    fontWeights: {
      light: number
      normal: number
      bold: number
    }
    shadow: string
  }
}