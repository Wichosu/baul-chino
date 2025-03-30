import 'server-only'
import { Metadata } from "next"
import { cookies } from "next/headers"
import { createClient } from "../utils/supabase/server"
import { cache } from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Filter from "./components/Filter"
import Footer from "../components/Footer"
import { ILanguage } from "./interfaces/ILanguage"
import { ICategory } from "./interfaces/ICategory"
import { IChannel } from './interfaces/IChannel'

export const metadata: Metadata = {
  title: "Aprende con contenido en Chino Mandarín",
  description: "Lista de canales de YouTube con contenido en Chino Mandarín para practicar o aprender."
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
  const categoriesData = getCategories()
  const languagesData = getLanguages()
  const channelsData = getChannels()

  const [categories, languages, channels] = await Promise.all([categoriesData, languagesData, channelsData])

  return (
    <>
      <Navbar />
      <main>
        <Hero title="Lista de Canales">
          Lista de canales de YouTube con contenido en Chino Mandarín para practicar o aprender.
          Utiliza el filtro para buscar el canal ideal para ti, presiona las categorias que más te 
          interesan y da click en el titulo para visitar el canal.
        </Hero>
        <Filter FetchedCategories={categories} FetchedLanguages={languages} FetchedChannels={channels} />
      </main>
      <Footer />
    </>
  )
}