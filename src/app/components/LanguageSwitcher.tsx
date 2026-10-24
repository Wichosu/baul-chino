'use client';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/src/i18n/navigation';
import { Button } from './Button';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
  ];

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <>
      {languages.map((lang) => (
        <Button
          key={lang.code}
          type={`${locale === lang.code ? 'disabled' : 'yellow'}`}
          margin='none'
          padding='1'
          className='mx-1'
          aria-current={locale === lang.code ? 'true' : undefined}
          onClick={() => handleLanguageChange(lang.code)}
        >
          {lang.label}
        </Button>
      ))}
    </>
  );
}
