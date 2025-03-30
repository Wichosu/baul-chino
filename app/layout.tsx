import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import GlobalStyles from "./GlobalStyles";
import StyledComponentsRegistry from "./lib/registry";
import { PostHogProvider } from "./providers";

const montserrat = Montserrat({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    absolute: "Baúl Chino - material didáctico para aprender Chino Mandarín",
    template: "%s - Baúl Chino"
  },
  description: "Baúl Chino tiene como propósito ser una página con material didáctico para apoyar con el aprendizaje del idioma Chino Mandarín",
  twitter: {
    card: "summary_large_image"
  },
  metadataBase: new URL("https://www.baulchino.com/"),
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
          <PostHogProvider>
            <StyledComponentsRegistry>
              {children}
            </StyledComponentsRegistry>
          </PostHogProvider>
          <Analytics />
        </body>
      </html>
    </>
  );
}
