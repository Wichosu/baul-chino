import { Metadata } from "next"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Filter from "./components/Filter"
import Footer from "../components/Footer"

export const metadata: Metadata = {
  title: "Lista de Canales",
  description: "Lista de canales de YouTube con contenido en Chino Mandarín para practicar o aprender."
}

export default async function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero title="Lista de Canales">
          Lista de canales de YouTube con contenido en Chino Mandarín para practicar o aprender.
          Utiliza el filtro para buscar el canal ideal para ti, presiona las categorias que más te 
          interesan y da click en el titulo para visitar el canal.
        </Hero>
        <Filter />
      </main>
      <Footer />
    </>
  )
}