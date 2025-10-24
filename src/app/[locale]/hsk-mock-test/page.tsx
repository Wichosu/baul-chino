import React from 'react';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Hero } from '../../components/Hero';
import Card from '../../components/Card';
import { Button } from '../../components/Button';
import { MockTestBundles } from '../../constants/hskmocktest/hskmocktestbundles';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: 'HskMockTest.Metadata',
  });

  return {
    title: t('Title'),
    description: t('Description'),
    twitter: {
      card: 'summary_large_image',
    },
    alternates: {
      canonical: '/hsk-mock-test',
      languages: {
        es: '/es/hsk-mock-test',
      },
    },
  };
}

// type OnlineSimulatorCard = {
//   title: string;
//   tests: OnlineMockTest[];
// };

// type OnlineMockTest = {
//   title: string;
// };

// function createOnlineSimulatorCard(
//   title: string,
//   tests: OnlineMockTest[]
// ): OnlineSimulatorCard {
//   return {
//     title,
//     tests,
//   };
// }

// function createOnlineMockTest(title: string): OnlineMockTest {
//   return {
//     title,
//   };
// }

// const onlineSimulatorCards = [
//   createOnlineSimulatorCard('HSK 2', [
//     createOnlineMockTest('H21329'),
//     createOnlineMockTest('H21330'),
//     createOnlineMockTest('H21331'),
//     createOnlineMockTest('H21332'),
//     createOnlineMockTest('H21334'),
//   ]),
// ];

export default function Page() {
  const t = useTranslations('HskMockTest');
  return (
    <>
      <Hero title={t('HeroTitle')}>
        <span className='block'>{t('HeroMessage1')}</span>
        <span className='block mt-4'>{t('HeroMessage2')}</span>
      </Hero>
      <section>
        <h2 className='text-3xl font-medium'>{t('OnlineSimulator')}</h2>
        <div>
          <h3 className='my-6 text-2xl font-medium text-center'>
            {t('ComingSoon')}
          </h3>
          {/* {onlineSimulatorCards.map((item) => (
            <Card key={item.title} as='article' padding='3'>
              <h3 className='text-2xl font-medium text-center'>{item.title}</h3>
              <div className='flex flex-col'>
                {item.tests.map((test) => (
                  <Button key={test.title} type='yellow'>
                    Mock Test {test.title}
                  </Button>
                ))}
              </div>
            </Card>
          ))} */}
        </div>
        <h2 className='text-3xl font-medium'>{t('DownloadBundles')}</h2>
        <div className='flex flex-wrap justify-center'>
          {MockTestBundles.map((bundle, index) => (
            <Card key={`bundle-${index}`} as='article' padding='3'>
              <h3 className='text-2xl font-medium text-center'>
                HSK {index + 1}
              </h3>
              <div className='flex flex-col'>
                {bundle.map((item) => (
                  <Button
                    key={item.filename}
                    type='yellow'
                    as='link'
                    href={item.url}
                    target='_self'
                  >
                    {item.title}
                  </Button>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
