import { Metadata } from "next"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Templates from "./components/Templates/Templates"
import Footer from "../components/Footer"
import Test from "./components/Test"

export const metadata: Metadata = {
  title: "Plantillas para practicar caligrafía de 汉字",
  description: "Plantillas para practicar caligrafía de 汉字, como escribir y practicar el orden de los trazos y sus radicales. Variedad de plantillas y generación personalizada"
}

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero title="Plantillas">
          Plantillas para practicar caligrafía de 汉字, como escribir y practicar el orden de los trazos y sus radicales. Variedad de plantillas y generación personalizada.
          Descarga una plantillas ya elaboradas o personaliza tu propia plantilla para practicar caligrafía de 汉字.
        </Hero>
        <Templates />
        <Test />
      </main>
      <Footer />
    </>
  )
}
