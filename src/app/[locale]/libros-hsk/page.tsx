import { Metadata } from "next"
import { Hero } from "@/src/app/components/Hero"
import ListContainer from "./components/ListContainer"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { getTranslations } from "next-intl/server"

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({locale, namespace: 'HskBooks.Metadata'})

  return {
    title: t('Title'),
    description: t('Description'),
    twitter: {
      card: "summary_large_image"
    },
  }
}

export default function Page() {
  const t = useTranslations('HskBooks')

  return (
    <>
      <Hero title={t('HeroTitle')}>
        <span style={{display: "block"}}>
          {t('HeroMessage1')}
        </span>
        <br />
        <span style={{display: "block"}}>
          {t('HeroMessage2')}
        </span>
        <br />
        <span style={{display: "block"}}>
          {t('HeroMessage3')}
        </span>
        <Link
          style={{marginLeft: "5px", color: "blue"}}
          href={'https://drive.google.com/drive/folders/1sokLkXNydcG5jzs-i639_38LU3bzga1f?usp=sharing'}
          target="_blank"
        >
          {t('HeroLink')}
        </Link>
      </Hero>
      <ListContainer />
    </>
  )
}