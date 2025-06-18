import { CompoundCard } from "./Card"
import ankiHsk from "../images/anki-menu.png"
import hskBooks from "../images/hsk-books.png"
import chineseChannels from "../images/chinese-channels-image.png"
import hanzi from "../images/hanzi.png"
import Template from "../images/template20mm.png"
import templateGenerator from "../images/templateGenerator.png"
import { StaticImageData } from "next/image"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

interface Card {
  title: string,
  imgAlt: string,
  img: StaticImageData,
  description: string,
  linkHref: string,
  linkName: string
}

function createCard(
  title: string,
  imgAlt: string,
  img: StaticImageData,
  description: string,
  linkHref: string,
  linkName: string
): Card {
  return {
    title,
    imgAlt,
    img,
    description,
    linkHref,
    linkName
  }
}

export default function CardsContainer() {
  const t = useTranslations('HomePage.CardsContainer')

  const cardsList: Card[] = [
    createCard(
      t('AnkiDecks.Title'),
      t('AnkiDecks.ImgAlt'),
      ankiHsk,
      t('AnkiDecks.Description'),
      'mazos-anki',
      t('AnkiDecks.LinkName')
    ),
    createCard(
      t('HskBooks.Title'),
      t('HskBooks.ImgAlt'),
      hskBooks,
      t('HskBooks.Description'),
      'libros-hsk',
      t('HskBooks.LinkName')
    ),
    createCard(
      t('Channels.Title'),
      t('Channels.ImgAlt'),
      chineseChannels,
      t('Channels.Description'),
      'canales',
      t('Channels.LinkName'),
    ),
    createCard(
      t('Hanzi.Title'),
      t('Hanzi.ImgAlt'),
      hanzi,
      t('Hanzi.Description'),
      '/hanzi',
      t('Hanzi.LinkName'),
    ),
    createCard(
      t('Templates.Title'),
      t('Templates.ImgAlt'),
      Template,
      t('Templates.Description'),
      '/plantillas',
      t('Templates.LinkName'),
    ),
    createCard(
      t('TemplateGenerator.Title'),
      t('TemplateGenerator.ImgAlt'),
      templateGenerator,
      t('TemplateGenerator.Description'),
      '/plantillas/generador',
      t('TemplateGenerator.LinkName'),
    )
  ]

  return (
    <section className="lg:grid lg:grid-cols-2 lg:gap-5 xl:grid-cols-3">
      {
        cardsList.map((e, index) => (
          <CompoundCard key={index}>
            <CompoundCard.Header>
              <CompoundCard.Header.Title className="text-4xl">{ e.title }</CompoundCard.Header.Title>
            </CompoundCard.Header>
            <CompoundCard.Content>
              <figure className="w-full my-2.5">
                <Image alt={e.imgAlt} src={e.img} width={500} height={500} className="aspect-square object-contain" />
              </figure>
              <p className="text-xl text-black font-normal my-2.5">{ e.description }</p>
            </CompoundCard.Content>
            <CompoundCard.Footer>
              <Button asChild><Link href={e.linkHref}>{t('GoTo')} { e.linkName }</Link></Button>
            </CompoundCard.Footer>
          </CompoundCard>
        ))
      }
    </section>
  )
}