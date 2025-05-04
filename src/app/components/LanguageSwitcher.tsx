'use client'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/src/i18n/navigation'
import styled from 'styled-components'

export default function LanguageSwitcher({ className }: { className?: string }) {
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
    <Container className={className}>
      {languages.map((lang) => (
        <LanguageButton
          key={lang.code}
          onClick={() => handleLanguageChange(lang.code)}
          $isActive={locale === lang.code}
        >
          {lang.label}
        </LanguageButton>
      ))}
    </Container>
  )
}

const Container = styled.div`
`

const LanguageButton = styled.button<{ $isActive: boolean }>`
  display: inline-block;
  font-size: ${props => props.theme.fontSizes.extraSmall};
  font-weight: ${props => props.theme.fontWeights.normal};
  margin-right: 5px;
  margin-left: 5px;
  padding: 6px 12px;
  border-radius: 4px;
  border: 1px solid ${props => props.$isActive ? props.theme.colors.blue : props.theme.colors.whiteBackground};
  background-color: ${props => props.$isActive ? props.theme.colors.blue : props.theme.colors.whiteBackground};
  color: ${props => props.$isActive ? props.theme.colors.white : props.theme.colors.blue};
  cursor: pointer;
`