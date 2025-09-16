import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Downloads() {
  const t = useTranslations('AnkiDecks.Downloads');

  return (
    <section>
      <h3 className='text-2xl text-black font-bold mb-2.5'>{t('Title')}</h3>
      <p className='text-xl text-black font-normal'>{t('Text')}</p>
      <small className='text-lg text-black font-light m-0 p-0 block'>
        {t('Note')}
      </small>
      <ButtonLink
        href={'https://play.google.com/store/apps/details?id=com.ichi2.anki'}
        target='_blank'
        className='bg-green-600'
      >
        <StyledImage alt='' src={'/android.svg'} width={20} height={20} />
        {t('Android')}
      </ButtonLink>
      <ButtonLink
        href={
          'https://itunes.apple.com/us/app/ankimobile-flashcards/id373493387'
        }
        target='_blank'
        className='bg-slate-700'
      >
        <StyledImage alt='' src={'/iphone.svg'} width={20} height={20} />
        {t('Iphone')}
      </ButtonLink>
      <ButtonLink
        href={
          'https://github.com/ankitects/anki/releases/download/25.09/anki-launcher-25.09-windows.exe'
        }
        download={true}
        target='_blank'
        className='bg-blue-500'
      >
        <StyledImage alt='' src={'/windows.svg'} width={20} height={20} />
        {t('Windows')}
      </ButtonLink>
      <ButtonLink
        href={
          'https://github.com/ankitects/anki/releases/download/25.09/anki-launcher-25.09-mac.dmg'
        }
        download={true}
        target='_blank'
        className='bg-slate-700'
      >
        <StyledImage alt='' src={'/apple.svg'} width={20} height={20} />
        {t('Mac')}
      </ButtonLink>
      <ButtonLink
        href={
          'https://github.com/ankitects/anki/releases/download/24.11/anki-24.11-linux-qt6.tar.zst'
        }
        download={true}
        target='_blank'
        className='bg-neutral-800'
      >
        <StyledImage alt='' src={'/linux.svg'} width={20} height={20} />
        {t('Linux')}
      </ButtonLink>
    </section>
  );
}

function StyledImage({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className='mr-2.5 lg:inline-block lg:float-left'
    />
  );
}

function ButtonLink({
  href,
  download = false,
  target,
  className,
  children,
}: {
  href: string;
  download?: boolean;
  target: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      download={download}
      target={target}
      className={`${className} flex items-center w-full text-white py-3 px-6 my-2.5 rounded-lg no-underline lg:inline-block lg:w-fit lg:mr-5`}
    >
      {children}
    </Link>
  );
}
