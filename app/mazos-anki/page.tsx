import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Dowloads from "./components/Downloads"
import ListContainer from "./components/ListContainer"
import Instructions from "./components/Instructions"
import ImageContainer from "./components/ImageContainer"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero title="Mazos Anki">
        Colección de mazos anki con vocabulario HSK. Cada mazo contiene un carácter, su pinyin,
        traducción en Inglés o Español, y un gif ilustrando la sucesión de trazos.
      </Hero>
      <Dowloads />
      <ListContainer />
      <Instructions />
      <ImageContainer />
      <Footer />
    </>
  )
}