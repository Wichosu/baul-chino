import { useTranslations } from 'next-intl';
import { Hero } from '../components/Hero';
import CardsContainer from '../components/CardsContainer';
import { languageList } from '@/src/app/utils/languages/languageList';

export async function generateStaticParams() {
  return languageList.map((lang) => ({
    locale: lang,
  }));
}

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <>
      <Hero title={t('HeroTitle')}>{t('HeroMessage')}</Hero>
      <CardsContainer />
    </>
  );
}
