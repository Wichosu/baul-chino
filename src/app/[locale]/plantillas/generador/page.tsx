import Hero from "@/src/app/components/Hero"
import TemplateGenerator from "./components/TemplateGenerator"

export default function Page() {
  return (
    <>
      <Hero title="Generador de Plantillas">
        Generador de plantillas para practicar caligrafía de 汉字. Prueba tus habilidades de escritura y practica el orden de los trazos y sus radicales.
      </Hero>
      <TemplateGenerator />
    </>
  )
}