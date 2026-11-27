import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Card } from '@/src/app/components/Card';
import { Button } from '@/src/app/components/Button';
import { Heart } from 'lucide-react';

type StartCard = {
  title: string;
  imgAlt: string;
  img: string;
  imgFallback: string;
  description: string;
  href: string;
  linkName: string;
};

type Tool = {
  title: string;
  description: string;
  href: string;
};

// a level row lists what actually exists; items without href are shown as
// unavailable instead of linking to a page that has nothing for that level
type LevelItem = {
  label: string;
  href?: string;
};

type Level = {
  name: string;
  items: LevelItem[];
};

export default function CardsContainer() {
  const t = useTranslations('HomePage.CardsContainer');
  const h = useTranslations('HomePage');

  const startHere: StartCard[] = [
    {
      title: t('NewHskBooks2026.Title'),
      imgAlt: t('NewHskBooks2026.ImgAlt'),
      img: '/newhskbooks/new-hsk-1.avif',
      imgFallback: '/newhskbooks/new-hsk-1.png',
      description: t('NewHskBooks2026.Description'),
      href: '/new-hsk-books-2026',
      linkName: t('NewHskBooks2026.LinkName'),
    },
    {
      title: t('NewHskAudios2026.Title'),
      imgAlt: t('NewHskAudios2026.ImgAlt'),
      img: '/homepage/hskdisk.avif',
      imgFallback: '/homepage/hskdisk.jpg',
      description: t('NewHskAudios2026.Description'),
      href: '/new-hsk-audios-2026',
      linkName: t('NewHskAudios2026.LinkName'),
    },
    {
      title: t('NewHskMockTest2026.Title'),
      imgAlt: t('NewHskMockTest2026.ImgAlt'),
      img: '/homepage/mocktest.avif',
      imgFallback: '/homepage/mocktest.jpg',
      description: t('NewHskMockTest2026.Description'),
      href: '/new-hsk-mock-test-2026',
      linkName: t('NewHskMockTest2026.LinkName'),
    },
  ];

  const books = (id: string) => ({
    label: h('Levels.Books'),
    href: `/new-hsk-books-2026#${id}`,
  });
  const audio = (id: string) => ({
    label: h('Levels.Audio'),
    href: `/new-hsk-audios-2026#${id}`,
  });
  const mock = { label: h('Levels.MockTests'), href: '/new-hsk-mock-test-2026' };
  const workbookSoon = { label: h('Levels.WorkbookSoon') };
  const mockSoon = { label: h('Levels.MockSoon') };

  const levels: Level[] = [
    { name: 'HSK 1', items: [books('hsk-1'), audio('hsk-1'), mock] },
    { name: 'HSK 2', items: [books('hsk-2'), audio('hsk-2'), mock] },
    { name: 'HSK 3', items: [books('hsk-3'), audio('hsk-3'), mock] },
    {
      name: 'HSK 4A',
      items: [books('hsk-4a'), audio('hsk-4a'), workbookSoon, mockSoon],
    },
    {
      name: 'HSK 4B',
      items: [books('hsk-4b'), audio('hsk-4b'), workbookSoon, mockSoon],
    },
  ];

  const tools: Tool[] = [
    {
      title: t('Channels.Title'),
      description: t('Channels.Description'),
      href: 'canales',
    },
    {
      title: t('AnkiDecks.Title'),
      description: t('AnkiDecks.Description'),
      href: 'mazos-anki',
    },
    {
      title: t('Hanzi.Title'),
      description: t('Hanzi.Description'),
      href: '/hanzi',
    },
    {
      title: t('Templates.Title'),
      description: t('Templates.Description'),
      href: '/plantillas',
    },
    {
      title: t('TemplateGenerator.Title'),
      description: t('TemplateGenerator.Description'),
      href: '/plantillas/generador',
    },
  ];

  const legacy: Tool[] = [
    {
      title: t('HskBooks.Title'),
      description: t('HskBooks.Description'),
      href: 'libros-hsk',
    },
    {
      title: t('HskAudios.Title'),
      description: t('HskAudios.Description'),
      href: 'hsk-audios',
    },
    {
      title: t('HskMockTest.Title'),
      description: t('HskMockTest.Description'),
      href: 'hsk-mock-test',
    },
    {
      title: t('HskAudiosDownload.Title'),
      description: t('HskAudiosDownload.Description'),
      href: 'hsk-audios-download',
    },
  ];

  return (
    <>
      <section aria-labelledby='start-here-title' className='mt-10'>
        <h2
          id='start-here-title'
          className='text-3xl font-medium text-ink mb-2'
        >
          {h('StartHere.Title')}
        </h2>
        <p className='text-lg text-ink-2 max-w-[var(--measure)] mb-6'>
          {h('StartHere.Intro')}
        </p>
        <div className='grid gap-4 md:grid-cols-3'>
          {startHere.map((card) => (
            <Card as='article' key={card.title} margin='none' padding='2'>
              <h3 className='text-2xl font-medium text-center text-ink mb-2'>
                {card.title}
              </h3>
              <picture>
                <source srcSet={card.img} width={500} height={500} />
                <Image
                  src={card.imgFallback}
                  alt={card.imgAlt}
                  width={500}
                  height={500}
                  loading='lazy'
                  className='aspect-square object-contain mx-auto w-full max-w-[200px]'
                />
              </picture>
              <p className='text-lg my-2 text-ink-2'>{card.description}</p>
              <div className='mx-auto w-fit mt-4'>
                <Button
                  type='yellow'
                  as='link'
                  href={card.href}
                  margin='none'
                  className='block whitespace-normal text-center'
                >
                  {card.linkName}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section aria-labelledby='levels-title' className='mt-12'>
        <h2 id='levels-title' className='text-3xl font-medium text-ink mb-2'>
          {h('Levels.Title')}
        </h2>
        <ul className='border-t border-line'>
          {levels.map((level) => (
            <li
              key={level.name}
              className='grid gap-3 border-b border-line py-4 md:grid-cols-[7rem_1fr] md:items-center'
            >
              <h3 className='text-2xl font-medium text-ink'>{level.name}</h3>
              <div className='flex flex-wrap items-center gap-2'>
                {level.items.map((item) =>
                  item.href ? (
                    <Link
                      key={item.label}
                      href={item.href}
                      className='inline-flex min-h-11 items-center rounded-md border border-line bg-surface px-3 text-lg text-ink no-underline transition-colors hover:bg-brass-tint'
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span
                      key={item.label}
                      className='inline-flex min-h-11 items-center rounded-md border border-dashed border-line px-3 text-lg text-ink-3'
                    >
                      {item.label}
                    </span>
                  )
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby='tools-title' className='mt-12'>
        <h2 id='tools-title' className='text-3xl font-medium text-ink mb-2'>
          {h('Tools.Title')}
        </h2>
        <ul className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-4'>
          {tools.map((tool) => (
            <li key={tool.title} className='relative'>
              <Card as='div' margin='none' padding='2'>
                <h3 className='text-xl font-medium text-ink'>
                  <Link
                    href={tool.href}
                    className='text-ink no-underline after:absolute after:inset-0 hover:text-brass-deep'
                  >
                    {tool.title}
                  </Link>
                </h3>
                <p className='text-lg mt-1 text-ink-2'>{tool.description}</p>
              </Card>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby='legacy-title' className='mt-12'>
        <h2 id='legacy-title' className='text-3xl font-medium text-ink mb-2'>
          {h('Legacy.Title')}
        </h2>
        <p className='text-lg text-ink-2 max-w-[var(--measure)] mb-4'>
          {h('Legacy.Intro')}
        </p>
        <ul className='grid gap-x-8 gap-y-4 sm:grid-cols-2'>
          {legacy.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                className='text-xl font-medium text-brass-deep underline-offset-2 hover:underline'
              >
                {item.title}
              </Link>
              <p className='text-lg text-ink-2'>{item.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby='about-title' className='mt-12'>
        <Card as='div' margin='none' padding='3'>
          <h2
            id='about-title'
            className='text-3xl font-medium text-center text-ink mb-2'
          >
            {t('About.Title')}
          </h2>
          <Heart className='mx-auto' stroke='none' fill='#b3261e' size={100} />
          <p className='text-lg my-2 text-center text-ink-2'>
            {t('About.Description')}
          </p>
          <div className='flex flex-wrap gap-2 justify-center mt-4'>
            <Button type='yellow' as='link' href='/about' margin='none'>
              {t('About.LinkNameAbout')}
            </Button>
            <Button type='warning' as='link' href='/roadmap' margin='none'>
              {t('About.LinkNameRoadmap')}
            </Button>
            <Button type='warning' as='link' href='/support' margin='none'>
              {t('About.LinkNameSupport')}
            </Button>
          </div>
        </Card>
      </section>
    </>
  );
}
