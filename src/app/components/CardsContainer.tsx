import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Card } from '@/src/app/components/Card';
import { Button } from '@/src/app/components/Button';
import { Heart } from 'lucide-react';

type Card = {
  title: string;
  imgAlt: string;
  img: string;
  imgFallback: string;
  description: string;
  linkHref: string;
  linkName: string;
};

function createCard(
  title: string,
  imgAlt: string,
  img: string,
  imgFallback: string,
  description: string,
  linkHref: string,
  linkName: string,
): Card {
  return {
    title,
    imgAlt,
    img,
    imgFallback,
    description,
    linkHref,
    linkName,
  };
}

export default function CardsContainer() {
  const t = useTranslations('HomePage.CardsContainer');

  const cardsList: Card[] = [
    createCard(
      t('HskBooks.Title'),
      t('HskBooks.ImgAlt'),
      '/homepage/hskbooks.avif',
      '/homepage/hskbooks.jpg',
      t('HskBooks.Description'),
      'libros-hsk',
      t('HskBooks.LinkName'),
    ),
    createCard(
      t('NewHskBooks2026.Title'),
      t('NewHskBooks2026.ImgAlt'),
      '/newhskbooks/new-hsk-1.avif',
      '/newhskbooks/new-hsk-1.png',
      t('NewHskBooks2026.Description'),
      'new-hsk-books-2026',
      t('NewHskBooks2026.LinkName'),
    ),
    createCard(
      t('HskAudios.Title'),
      t('HskAudios.ImgAlt'),
      '/homepage/hskdisk.avif',
      '/homepage/hskdisk.jpg',
      t('HskAudios.Description'),
      'hsk-audios',
      t('HskAudios.LinkName'),
    ),
    createCard(
      t('HskMockTest.Title'),
      t('HskMockTest.ImgAlt'),
      '/homepage/mocktest.avif',
      '/homepage/mocktest.jpg',
      t('HskMockTest.Description'),
      'hsk-mock-test',
      t('HskMockTest.LinkName'),
    ),
    createCard(
      t('HskAudiosDownload.Title'),
      t('HskAudiosDownload.ImgAlt'),
      '/homepage/hskdownload.avif',
      '/homepage/hskdownload.jpg',
      t('HskAudiosDownload.Description'),
      'hsk-audios-download',
      t('HskAudiosDownload.LinkName'),
    ),
    createCard(
      t('Channels.Title'),
      t('Channels.ImgAlt'),
      '/homepage/channels.avif',
      '/homepage/channels.jpg',
      t('Channels.Description'),
      'canales',
      t('Channels.LinkName'),
    ),
    createCard(
      t('AnkiDecks.Title'),
      t('AnkiDecks.ImgAlt'),
      '/homepage/anki.avif',
      '/homepage/anki.jpg',
      t('AnkiDecks.Description'),
      'mazos-anki',
      t('AnkiDecks.LinkName'),
    ),
    createCard(
      t('Hanzi.Title'),
      t('Hanzi.ImgAlt'),
      '/homepage/hanzi.avif',
      '/homepage/hanzi.png',
      t('Hanzi.Description'),
      '/hanzi',
      t('Hanzi.LinkName'),
    ),
    createCard(
      t('Templates.Title'),
      t('Templates.ImgAlt'),
      '/homepage/template20mm.avif',
      '/homepage/template20mm.jpg',
      t('Templates.Description'),
      '/plantillas',
      t('Templates.LinkName'),
    ),
    createCard(
      t('TemplateGenerator.Title'),
      t('TemplateGenerator.ImgAlt'),
      '/homepage/templateGenerator.avif',
      '/homepage/templateGenerator.jpg',
      t('TemplateGenerator.Description'),
      '/plantillas/generador',
      t('TemplateGenerator.LinkName'),
    ),
  ];

  return (
    <section className='lg:grid lg:grid-cols-2 lg:gap-5 xl:grid-cols-3'>
      {cardsList.map((card, index) => (
        <Card key={index} as='article'>
          <h2 className='text-3xl text-center font-medium'>{card.title}</h2>
          <picture>
            <source srcSet={card.img} width={500} height={500} />
            <Image
              src={card.imgFallback}
              alt={card.imgAlt}
              width={500}
              height={500}
              loading='lazy'
              className='aspect-square object-contain mx-auto'
            />
          </picture>
          <p className='text-lg my-2'>{card.description}</p>
          <div className='mx-auto w-fit mt-4'>
            <Button
              type='yellow'
              as='link'
              href={card.linkHref}
              target='_self'
              margin='none'
              className='block whitespace-normal text-center'
            >
              {card.linkName}
            </Button>
          </div>
        </Card>
      ))}
      <Card as='article'>
        <h2 className='text-3xl text-center font-medium'>{t('About.Title')}</h2>
        <picture>
          <Heart className='mx-auto' fill='red' size={150} />
        </picture>
        <p className='text-lg my-2'>{t('About.Description')}</p>
        <div className='flex flex-col gap-2 items-center mx-auto w-fit mt-4'>
          <Button
            type='yellow'
            as='link'
            href='/about'
            target='_self'
            margin='none'
          >
            {t('About.LinkNameAbout')}
          </Button>
          <Button
            type='yellow'
            as='link'
            href='/roadmap'
            target='_self'
            margin='none'
          >
            {t('About.LinkNameRoadmap')}
          </Button>
          <Button
            type='yellow'
            as='link'
            href='/support'
            target='_self'
            margin='none'
          >
            {t('About.LinkNameSupport')}
          </Button>
        </div>
      </Card>
    </section>
  );
}
