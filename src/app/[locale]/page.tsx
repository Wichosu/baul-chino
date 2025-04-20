import { useTranslations } from "next-intl";
import Hero from "../components/Hero";
import CardsContainer from "../components/CardsContainer";

export default function Home() {
  const t = useTranslations('HomePage')

  return (
    <>
      <Hero title="Inicio">
        Baúl Chino tiene como propósito ser una página con material didáctico para apoyar el aprendizaje del idioma Chino Mandarín para los hispanohablantes. 好好学习, 天天向上.
      </Hero>
      <h3>{t('title')}</h3>
      <CardsContainer />
    </>
  );
}
