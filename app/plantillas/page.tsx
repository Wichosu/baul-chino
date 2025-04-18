import { Metadata } from "next"
import Hero from "../components/Hero"
import Templates from "./components/Templates/Templates"

export const metadata: Metadata = {
  title: "Plantillas para practicar caligrafía de 汉字",
  description: "Plantillas para practicar caligrafía de 汉字, como escribir y practicar el orden de los trazos y sus radicales. Variedad de plantillas y generación personalizada"
}

export default function Page() {
  return (
    <>
      <Hero title="Plantillas">
        Plantillas para practicar caligrafía de 汉字, como escribir y practicar el orden de los trazos y sus radicales. Variedad de plantillas y generación personalizada.
        Descarga plantillas ya elaboradas o personaliza tu propia plantilla para practicar caligrafía de 汉字. Desliza horizontalmente para ver todas las plantillas.
      </Hero>
      <Templates />
    </>
  )
}
