import { useTranslations } from "next-intl";
import Hero from "../components/Hero";
import CardsContainer from "../components/CardsContainer";

export default function Home() {
  const t = useTranslations('HomePage')

  return (
    <>
      <Hero title={t('HeroTitle')}>
        {t('HeroMessage')}
      </Hero>
      <CardsContainer />
    </>
  );
}
