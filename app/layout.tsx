import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import GlobalStyles from "./GlobalStyles";

const montserrat = Montserrat({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Baúl Chino",
  description: "Baul Chino tiene como propósito ser una página con material didáctico para apoyar el aprendizaje del idioma Chino Mandarín",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {children}
      </body>
      <GlobalStyles />
    </html>
  );
}
