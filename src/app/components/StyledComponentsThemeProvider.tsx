"use client"
import { DefaultTheme, ThemeProvider } from "styled-components"

const theme: DefaultTheme = {
  colors: {
    blue: "hsl(210, 90%, 50%)",
    blueHover: "hsl(210, 90%, 40%)",
    white: "hsl(0, 0%, 100%)",
    whiteBackground: "hsl(0, 0%, 95%)",
    grayBackground: "hsl(0, 0%, 85%)",
    black: "hsl(0, 0%, 5%)",
  },
  fontSizes: {
    extraSmall: "1rem",
    small: "1.25rem",
    medium: "1.5rem",
    large: "1.75rem",
    extraLarge: "2rem",
  },
  fontWeights: {
    light: 300,
    normal: 400,
    bold: 500,
  },
  shadow: "0px 8px 16px 0px rgba(0,0,0,0.2)"
}

export default function StyledComponentsThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}