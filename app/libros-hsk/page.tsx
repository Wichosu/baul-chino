import { Metadata } from "next"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import ListContainer from "./components/ListContainer"
import Footer from "../components/Footer"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Libros HSK",
  description: "Descarga todos los libros HSK, desde HSK 1 hasta HSK 6, en formato PDF. La descarga es totalmente gratuita y sin anuncios o links molestos."
}

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero title="Libros HSK">
          Descarga todos los libros HSK, desde HSK 1 hasta HSK 6, en formato PDF. La descarga es totalmente
          gratuita y sin anuncios o links molestos. 
          <br />
          <br />
          ADVERTENCIA: La descarga del libro puede tomar unos
          minutos dependiendo de la calidad de tu Internet. 
          <br />
          <br />
          CARPETA DE DRIVE: 
          <Link
            style={{marginLeft: "5px", color: "blue"}}
            href={'https://drive.google.com/drive/folders/1sokLkXNydcG5jzs-i639_38LU3bzga1f?usp=sharing'}
            target="_blank"
            >
            presiona para visitar la carpeta de Google Drive
          </Link>
        </Hero>
        <ListContainer />
      </main>
      <Footer />
    </>
  )
}