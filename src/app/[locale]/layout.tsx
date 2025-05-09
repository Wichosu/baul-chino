import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
//import GlobalStyles from "../GlobalStyles";
import '@/src/styles/globals.css';
import StyledComponentsRegistry from "../lib/registry";
import StyledComponentsThemeProvider from "../components/StyledComponentsThemeProvider";
import { PostHogProvider } from "../providers";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { routing } from "@/src/i18n/routing";
import { notFound } from "next/navigation";
import { Navbar } from "@/src/app/components/Navbar";
import Footer from "../components/Footer";
import { Container } from "@/src/app/components/Container";

const montserrat = Montserrat({
  subsets: ["latin"],
})

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({locale, namespace: 'HomePage.Metadata'})

  return {
    title: {
      absolute: t('Title'),
      template: "%s - Baúl Chino"
    },
    description: t('Description'),
    twitter: {
      card: "summary_large_image"
    },
    metadataBase: new URL("https://www.baulchino.com/")
  }
}

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
      {/* <GlobalStyles /> */}
      <html lang={locale}>
        <body className={montserrat.className}>
          <PostHogProvider>
            <StyledComponentsRegistry>
              <NextIntlClientProvider>
                <StyledComponentsThemeProvider>
                  <Container>
                    <Navbar />
                    <main>
                      {children}
                    </main>
                    <Footer />
                  </Container>
                </StyledComponentsThemeProvider>
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
