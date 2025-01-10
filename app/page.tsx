import Hero from "./components/Hero";
import CardsContainer from "./components/CardsContainer";

export default function Home() {
  return (
    <>
      <Hero />
      <CardsContainer />
      <small style={{
        display: 'block',
        textAlign: 'center', 
        marginTop: '40px', 
        marginBottom: '40px'
      }}>
        Más por venir...
      </small>
    </>
  );
}
