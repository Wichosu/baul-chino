import { useTranslations } from "next-intl"

export default function Instructions() {
  const t = useTranslations('AnkiDecks.Instructions')

  return (
    <section>
      <h3 className="text-3xl text-black font-medium mb-5">{t('Title')}</h3>
      <iframe 
        src="https://www.youtube.com/embed/rXxrHDEeYIw?si=snY_Cb7Kvg85j3xD" 
        title="¿CÓMO usar ANKI para aprender IDIOMAS? (TUTORIAL para PRINCIPIANTES)" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen
        loading="lazy"
        className="w-full max-w-9/12 border-none aspect-video"
      />
    </section>
  )
}