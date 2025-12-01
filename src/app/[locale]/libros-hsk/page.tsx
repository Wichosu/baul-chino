import { Metadata } from 'next';
import { Hero } from '@/src/app/components/Hero';
import ListContainer from './components/ListContainer';
import { Button } from '@/src/app/components/Button';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'HskBooks.Metadata' });

  return {
    title: t('Title'),
    description: t('Description'),
    twitter: {
      card: 'summary_large_image',
    },
    alternates: {
      canonical: '/libros-hsk',
      languages: {
        es: '/es/libros-hsk',
      },
    },
  };
}

export default function Page() {
  const t = useTranslations('HskBooks');

  return (
    <>
      <Hero title={t('HeroTitle')}>
        <span className='block'>{t('HeroMessage1')}</span>
        <span className='block my-4'>{t('HeroMessage2')}</span>
        <span className='block mb-2'>{t('HeroMessage3')}</span>
        <Button
          type='yellow'
          as='link'
          href='https://drive.google.com/drive/folders/1sokLkXNydcG5jzs-i639_38LU3bzga1f?usp=sharing'
          padding='1'
          margin='none'
        >
          {t('HeroLink')}
        </Button>
      </Hero>
      <ListContainer />
    </>
  );
}
