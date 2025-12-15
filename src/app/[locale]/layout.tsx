import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import '@/src/styles/globals.css';
import { PostHogProvider } from '../providers';
import { NextIntlClientProvider } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Navbar } from '@/src/app/components/Navbar/index';
import Footer from '../components/Footer';
import { Container } from '@/src/app/components/Container';
import Script from 'next/script';

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
        <head>
          <Script
            id='umami-script'
            defer
            src='https://umami.baulchino.com/script.js'
            data-website-id='6726258b-d029-423b-8c9c-8576880c89ec'
          />
        </head>
        <body className={bodyClassName}>
          <PostHogProvider>
            <NextIntlClientProvider>
              <Container>
                <Navbar />
                <main>{children}</main>
                <Footer />
              </Container>
            </NextIntlClientProvider>
          </PostHogProvider>
          <Script type='text/javascript'>
            {`
              (() => {
                const name = 'outbound-link-click';
                document.querySelectorAll('a').forEach(a => {
                  if (a.host !== window.location.host && !a.getAttribute('data-umami-event')) {
                    a.setAttribute('data-umami-event', name);
                    a.setAttribute('data-umami-event-url', a.href);
                  }
                });
              })();
            `}
          </Script>
        </body>
      </html>
    </>
  );
}
