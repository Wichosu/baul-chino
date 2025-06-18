'use client'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/src/i18n/navigation'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' }
  ]

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale })
  }

  return (
    <>
      {languages.map((lang) => (
        <Button
          key={lang.code}
          onClick={() => handleLanguageChange(lang.code)}
          className={
            cn(
              `${lang.code === locale ? 'bg-gray-800' : 'bg-gray-400'}`,
              "cursor-pointer",
            )
          }
        >
          {lang.label}
        </Button>
      ))}
    </>
  )
}