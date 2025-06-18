import 'server-only'
import { Metadata } from "next"
import { cookies } from "next/headers"
import { createClient } from "@/src/app/utils/supabase/server"
import { cache } from "react"
import { Hero } from "../../components/Hero"
import Filter from "./components/Filter"
import { ILanguage } from "./interfaces/ILanguage"
import { ICategory } from "./interfaces/ICategory"
import { IChannel } from './interfaces/IChannel'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({locale, namespace: 'Channels.Metadata'})

  return {
    title: t('Title'),
    description: t('Description'),
    twitter: {
      card: "summary_large_image"
    },
  }
}

const getCategories = cache(async () => {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data } = await supabase
    .from('category')
    .select('*')
  
  return data as ICategory[]
})

const getLanguages = cache(async () => {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data } = await supabase
    .from('language')
    .select('*')

  return data as ILanguage[]
})

const getChannels = cache(async () => {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data } = await supabase
    .from('channel')
    .select(`
      *,
      channel_category!inner (
        category!inner (
          id,
          name
        )
      ),
      channel_language!inner (
        language!inner (
          id,
          name
        )
      )
    `)

  return data as IChannel[]
})

export default async function Page() {
  const t = await getTranslations('Channels')
  const categoriesData = getCategories()
  const languagesData = getLanguages()
  const channelsData = getChannels()

  const [categories, languages, channels] = await Promise.all([categoriesData, languagesData, channelsData])

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
      </Hero>
      <Filter FetchedCategories={categories} FetchedLanguages={languages} FetchedChannels={channels} />
    </>
  )
}