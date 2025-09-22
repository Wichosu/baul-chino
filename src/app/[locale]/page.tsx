import { useTranslations } from 'next-intl';
import { Hero } from '../components/Hero';
import CardsContainer from '../components/CardsContainer';
import { Navbar } from '../components/Navbar/index';

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <>
      <Navbar />
      <Hero title={t('HeroTitle')}>{t('HeroMessage')}</Hero>
      <CardsContainer />
    </>
  );
}
