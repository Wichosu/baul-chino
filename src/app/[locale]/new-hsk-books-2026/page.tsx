import { Metadata } from 'next';
import { Hero } from '../../components/Hero';
import { BookCard } from './components/BookCard';
import { hasLocale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/src/i18n/routing';
import { notFound } from 'next/navigation';
import { Book } from '../../constants/newhskbooks/newhskbooks.types';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: 'NewHskBooks2026.Metadata',
  });

  return {
    title: t('Title'),
    description: t('Description'),
    twitter: {
      card: 'summary_large_image',
    },
    alternates: {
      canonical: '/new-hsk-books-2026',
      languages: {
        en: '/en/new-hsk-books-2026',
        es: '/es/new-hsk-books-2026',
      },
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const t = await getTranslations('NewHskBooks2026');

  // Book data - update URLs when available
  const books: Book[] = [
    {
      title: t('BookCards.HSK1.Title'),
      image: '/newhskbooks/new-hsk-1.avif',
      fallbackImage: '/newhskbooks/new-hsk-1.jpg',
      alt: t('BookCards.HSK1.Alt'),
      downloadLinks: [
        {
          name: t('BookCards.HSK1.Textbook'),
          url: 'https://cdn.baulchino.com/new-hsk-books/hsk-course-1.pdf',
        },
        {
          name: t('BookCards.HSK1.Workbook'),
          url: 'https://cdn.baulchino.com/new-hsk-books/hsk-course-1.pdf',
        },
      ],
    },
  ];

  return (
    <>
      <Hero title={t('HeroTitle')}>
        <span className='block'>{t('HeroMessage1')}</span>
        <span className='block mt-4'>{t('HeroMessage2')}</span>
      </Hero>
      <section>
        <h2 className='text-2xl text-black font-medium my-5'>
          {t('BookCards.Title')}
        </h2>
        <div className='grid gap-2 justify-center lg:gap-8 lg:grid-cols-2 xl:grid-cols-3'>
          {books.map((book) => (
            <BookCard
              key={book.title}
              title={book.title}
              image={book.image}
              fallbackImage={book.fallbackImage}
              alt={book.alt}
              downloadLinks={book.downloadLinks}
            />
          ))}
        </div>
      </section>
    </>
  );
}
