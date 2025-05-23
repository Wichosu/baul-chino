import Image, { StaticImageData } from "next/image"
import ankiMenu from "@/src/app/images/anki-menu.png"
import ankiCard from "@/src/app/images/anki-card.png"
import ankiBrowser from "@/src/app/images/anki-browser.png"
import ankiCardFront from "@/src/app/images/anki-card-front.png"
import { useTranslations } from "next-intl"

export default function ImageContainer() {
  const t = useTranslations('AnkiDecks.ImageContainer')

  return (
    <section>
      <h3 className="text-3xl text-black font-medium mb-2.5 mt-5">{t('Title')}</h3>
      <ImageWrapper>
        <StyledImage alt="Menú de Anki mostrando una lista de mazos" src={ankiMenu} />
      </ImageWrapper>
      <ImageWrapper>
        <StyledImage alt="Flashcard mostrando los carácteres 不客气, su forma en pinyin, su audio, traducción al español y una animación con la sucesión de trazos" src={ankiCard} />
      </ImageWrapper>
      <ImageWrapper>
        <StyledImage alt="Explorador de archivos de Anki, en el se muestran todas las Flashcards presentes en un mazo" src={ankiBrowser} />
      </ImageWrapper>
      <ImageWrapper>
        <StyledImage alt="Flashcard mostrando únicamente el carácter 爱" src={ankiCardFront} />
      </ImageWrapper>
    </section>
  )
};

function ImageWrapper({ children }: { children: React.ReactNode}) {
  return (
    <figure className="inline-block m-5">
      { children }
    </figure>
  )
}

function StyledImage({ alt, src }: { alt: string, src: string | StaticImageData }) {
  return (
    <Image alt={alt} src={src} width={500} height={500} className="object-contain" />
  )
}