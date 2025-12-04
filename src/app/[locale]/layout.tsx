import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import '@/src/styles/globals.css';
import { PostHogProvider } from '../providers';
import { NextIntlClientProvider } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Navbar } from '@/src/app/components/Navbar/index';
import Footer from '../components/Footer';
import { Container } from '@/src/app/components/Container';

const montserrat = Montserrat({
  subsets: ['latin'],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'HomePage.Metadata' });

  return {
    title: {
      absolute: t('Title'),
      template: '%s - Baúl Chino',
    },
    description: t('Description'),
    twitter: {
      card: 'summary_large_image',
    },
    metadataBase: new URL('https://www.baulchino.com/'),
    alternates: {
      canonical: '/',
      languages: {
        es: '/es',
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  const bodyClassName = `${montserrat.className}`;

  return (
    <>
      <html lang={locale}>
        <body className={bodyClassName}>
          <script
            id='adsense-script'
            async
            src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9265679045037542'
            crossOrigin='anonymous'
            suppressHydrationWarning
          />
          <PostHogProvider>
            <NextIntlClientProvider>
              <Container>
                <p className='text-center text-xl mb-4 font-medium bg-red-100 rounded shadow-md'>
                  baulchino will have maintenance from 2025-12-06 to 2025-12-07,
                  expect some issues.
                  <br />
                  baulchino tendra mantenimiento del 6 al 7 de diciembre, se
                  pueden presentar problemas.
                </p>
                <Navbar />
                <main>{children}</main>
                <Footer />
              </Container>
            </NextIntlClientProvider>
          </PostHogProvider>
          <Analytics />
        </body>
      </html>
    </>
  );
}
