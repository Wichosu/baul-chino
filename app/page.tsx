import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CardsContainer from "./components/CardsContainer";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero title="Inicio">
        Baúl Chino tiene como propósito ser una página con material didáctico para apoyar el aprendizaje del idioma Chino Mandarín para los hispanohablantes. 好好学习, 天天向上.
      </Hero>
      <CardsContainer />
      <Footer />
    </>
  );
}
