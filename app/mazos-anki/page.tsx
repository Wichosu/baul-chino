import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import ListContainer from "./components/ListContainer"
import ImageContainer from "./components/ImageContainer"


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero title="Mazos Anki">
        Colección de mazos anki con vocabulario HSK. Cada mazo contiene un carácter, su pinyin, traducción en Inglés, y un gif ilustrando la sucesión de trazos.
      </Hero>
      <ListContainer />
      <ImageContainer />
      <Footer />
    </>
  )
}