import Link from "next/link"
import { useTranslations } from "next-intl"

export default function Footer() {
  const t = useTranslations('Footer')

  return (
      <small style={{
        display: 'block',
        textAlign: 'center', 
        marginTop: '40px', 
        marginBottom: '40px',
        fontSize: '16px',
        fontWeight: '400',
        color: 'black'
      }}>
        {t('Message')}
      <br/>
        {t('Link')} <Link href={"https://github.com/Wichosu"} target="_blank">{t('Author')}</Link>
      </small>
  )
}