import { Metadata } from "next";
import Hero from "../components/Hero";
import Writer from "./components/Writer";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Aprende a escribir chino, conoce el orden de los trazos y sus radicales",
  description: "Herramienta para aprender a escribir chino, conocer el orden de los trazos y sus radicales observando animaciones personalizadas."
}

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero title="Escribe Hanzi 汉字">
        Herramienta para aprender a escribir chino, conocer el orden de los trazos y sus radicales
        observando animaciones personalizadas.
        <br />
        Escribe en la caja de texto y se mostraran tus hanzi 汉字
      </Hero>
      <Writer />
      <Footer />
    </>
  );
}