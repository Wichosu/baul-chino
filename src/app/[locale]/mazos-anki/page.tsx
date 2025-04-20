import { Metadata } from "next"
import Hero from "@/src/app/components/Hero"
import Downloads from "./components/Downloads"
import ListContainer from "./components/ListContainer"
import Instructions from "./components/Instructions"
import ImageContainer from "./components/ImageContainer"

export const metadata: Metadata = {
  title: "Colección de mazos anki con vocabulario HSK",
  description: "Colección de mazos anki con vocabulario HSK. Cada mazo contiene un carácter, su pinyin, traducción en Inglés o Español, y un gif ilustrando la sucesión de trazos."
}

export default function Page() {
  return (
    <>
      <Hero title="Mazos Anki">
        Colección de mazos anki con vocabulario HSK. Cada mazo contiene un carácter, su pinyin,
        traducción en Inglés o Español, y un gif ilustrando la sucesión de trazos.
      </Hero>
      <Downloads />
      <ListContainer />
      <Instructions />
      <ImageContainer />
    </>
  )
}