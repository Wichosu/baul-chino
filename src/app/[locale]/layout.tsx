import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import GlobalStyles from "../GlobalStyles";
import StyledComponentsRegistry from "../lib/registry";
import { PostHogProvider } from "../providers";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { routing } from "@/src/i18n/routing";
import { notFound } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>
}>) {

  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <>
      <GlobalStyles />
      <html lang={locale}>
        <body className={montserrat.className}>
          <PostHogProvider>
            <StyledComponentsRegistry>
              <NextIntlClientProvider>
                <Navbar />
                <main>
                  {children}
                </main>
                <Footer />
              </NextIntlClientProvider>
            </StyledComponentsRegistry>
          </PostHogProvider>
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </>
  );
}
