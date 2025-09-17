import Image, { StaticImageData } from 'next/image';
import { useTranslations } from 'next-intl';

export default function ImageContainer() {
  const t = useTranslations('AnkiDecks.ImageContainer');

  return (
    <section>
      <h3 className='text-3xl text-black font-medium mb-2.5 mt-5'>
        {t('Title')}
      </h3>
      <ImageWrapper>
        <source srcSet='/anki/anki-menu.avif' width={500} height={500} />
        <StyledImage alt={t('AnkiMenuAlt')} src='/anki/anki-menu.png' />
      </ImageWrapper>
      <ImageWrapper>
        <source srcSet='/anki/anki-card.avif' width={500} height={500} />
        <StyledImage alt={t('AnkiCardAlt')} src='/anki/anki-card.png' />
      </ImageWrapper>
      <ImageWrapper>
        <source srcSet='/anki/anki-browser.avif' width={500} height={500} />
        <StyledImage alt={t('AnkiBrowserAlt')} src='/anki/anki-browser.png' />
      </ImageWrapper>
      <ImageWrapper>
        <source srcSet='/anki/anki-card-front.avif' width={500} height={500} />
        <StyledImage
          alt={t('AnkiCardFrontAlt')}
          src='/anki/anki-card-front.png'
        />
      </ImageWrapper>
    </section>
  );
}

function ImageWrapper({ children }: { children: React.ReactNode }) {
  return <picture className='inline-block m-5'>{children}</picture>;
}

function StyledImage({
  alt,
  src,
}: {
  alt: string;
  src: string | StaticImageData;
}) {
  return (
    <Image
      alt={alt}
      src={src}
      loading='lazy'
      width={500}
      height={500}
      className='object-contain'
    />
  );
}
