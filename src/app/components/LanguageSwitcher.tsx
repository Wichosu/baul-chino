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
  display: flex;
  gap: 8px;
  align-items: center;
`

const LanguageButton = styled.button<{ $isActive: boolean }>`
  padding: 6px 12px;
  border-radius: 4px;
  border: 1px solid ${props => props.$isActive ? '#000' : '#ddd'};
  background-color: ${props => props.$isActive ? '#000' : 'transparent'};
  color: ${props => props.$isActive ? '#fff' : '#000'};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${props => props.$isActive ? '#000' : '#f5f5f5'};
  }
`