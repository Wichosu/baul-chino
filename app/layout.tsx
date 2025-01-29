import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import GlobalStyles from "./GlobalStyles";
import StyledComponentsRegistry from "./lib/registry";

const montserrat = Montserrat({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Baúl Chino",
  description: "Baúl Chino tiene como propósito ser una página con material didáctico para apoyar el aprendizaje del idioma Chino Mandarín",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <GlobalStyles />
      <html lang="es">
        <body className={montserrat.className}>
          <StyledComponentsRegistry>
            {children}
          </StyledComponentsRegistry>
        </body>
      </html>
    </>
  );
}
