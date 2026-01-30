import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Card } from '@/src/app/components/Card';
import { Button } from '@/src/app/components/Button';

type Book = {
  name: string;
  link: string;
};

type Card = {
  name: string;
  img: string;
  alt: string;
  fallbackImg: string;
  books: Book[];
};

function createBook(name: string, link: string): Book {
  return {
    name: name,
    link: link,
  };
}

function createCard(
  name: string,
  img: string,
  alt: string,
  fallbackImg: string,
  books: Book[],
): Card {
  return {
    name: name,
    img: img,
    alt: alt,
    fallbackImg: fallbackImg,
    books: books,
  };
}

const BookCards = [
  createCard(
    'HSK-1',
    '/hskbooks/hsk1.avif',
    'Picture of both HSK 1 books',
    '/hskbooks/hsk1.jpg',
    [
      createBook(
        'HSK-1-TEXTBOOK',
        'https://cdn.baulchino.com/hsk-books/HSK-1-Textbook.pdf',
      ),
      createBook(
        'HSK-1-WORKBOOK',
        'https://cdn.baulchino.com/hsk-books/HSK-1-Workbook.pdf',
      ),
      createBook(
        'HSK-1-WORKBOOK-ANSWERS',
        'https://cdn.baulchino.com/hsk-books-answers/hsk1-workbook-answers.pdf',
      ),
    ],
  ),
  createCard(
    'HSK-2',
    '/hskbooks/hsk2.avif',
    'Picture of both HSK 2 books',
    '/hskbooks/hsk2.jpg',
    [
      createBook(
        'HSK-2-TEXTBOOK',
        'https://cdn.baulchino.com/hsk-books/HSK-2-Textbook.pdf',
      ),
      createBook(
        'HSK-2-WORKBOOK',
        'https://cdn.baulchino.com/hsk-books/HSK-2-Workbook.pdf',
      ),
    ],
  ),
  createCard(
    'HSK-3',
    '/hskbooks/hsk3.avif',
    'Picture of both HSK 3 books',
    '/hskbooks/hsk3.jpg',
    [
      createBook(
        'HSK-3-TEXTBOOK',
        'https://cdn.baulchino.com/hsk-books/HSK-3-Textbook.pdf',
      ),
      createBook(
        'HSK-3-WORKBOOK',
        'https://cdn.baulchino.com/hsk-books/HSK-3-Workbook.pdf',
      ),
    ],
  ),
  createCard(
    'HSK-4',
    '/hskbooks/hsk4.avif',
    'Picture of both HSK 4 books',
    '/hskbooks/hsk4.jpg',
    [
      createBook(
        'HSK-4A-TEXTBOOK',
        'https://cdn.baulchino.com/hsk-books/HSK-4A-Textbook.pdf',
      ),
      createBook(
        'HSK-4A-WORKBOOK',
        'https://cdn.baulchino.com/hsk-books/HSK-4A-Workbook.pdf',
      ),
      createBook(
        'HSK-4B-TEXTBOOK',
        'https://cdn.baulchino.com/hsk-books/HSK-4B-Textbook.pdf',
      ),
      createBook(
        'HSK-4B-WORKBOOK',
        'https://cdn.baulchino.com/hsk-books/HSK-4B-Workbook.pdf',
      ),
    ],
  ),
  createCard(
    'HSK-5',
    '/hskbooks/hsk5.avif',
    'Picture of both HSK 5 books',
    '/hskbooks/hsk5.jpg',
    [
      createBook(
        'HSK-5A-TEXTBOOK',
        'https://cdn.baulchino.com/hsk-books/HSK-5A-Textbook.pdf',
      ),
      createBook(
        'HSK-5A-WORKBOOK',
        'https://cdn.baulchino.com/hsk-books/HSK-5A-Workbook.pdf',
      ),
      createBook(
        'HSK-5B-TEXTBOOK',
        'https://cdn.baulchino.com/hsk-books/HSK-5B-Textbook.pdf',
      ),
      createBook(
        'HSK-5B-WORKBOOK',
        'https://cdn.baulchino.com/hsk-books/HSK-5B-Workbook.pdf',
      ),
    ],
  ),
  createCard(
    'HSK-6',
    '/hskbooks/hsk6.avif',
    'Picture of both HSK 6 books',
    '/hskbooks/hsk6.jpg',
    [
      createBook(
        'HSK-6A-TEXTBOOK',
        'https://cdn.baulchino.com/hsk-books/HSK-6A-Textbook.pdf',
      ),
      createBook(
        'HSK-6A-WORKBOOK',
        'https://cdn.baulchino.com/hsk-books/HSK-6A-Workbook.pdf',
      ),
      createBook(
        'HSK-6B-TEXTBOOK',
        'https://cdn.baulchino.com/hsk-books/HSK-6B-Textbook.pdf',
      ),
      createBook(
        'HSK-6B-WORKBOOK',
        'https://cdn.baulchino.com/hsk-books/HSK-6B-Workbook.pdf',
      ),
    ],
  ),
];

export default function ListContainer() {
  const t = useTranslations('HskBooks.ListContainer');

  return (
    <section>
      <h2 className='text-2xl text-black font-medium my-5'>{t('Title')}</h2>
      <div className='grid gap-2 justify-center lg:gap-8 lg:grid-cols-2 xl:grid-cols-3'>
        {BookCards.map((card, index) => (
          <Card as='article' key={index}>
            <h3 className='text-center text-3xl mb-2'>{card.name}</h3>
            <picture>
              <source srcSet={card.img} width={500} height={500} />
              <Image
                src={card.fallbackImg}
                alt={card.alt}
                width={500}
                height={500}
                loading='lazy'
                className='object-contain aspect-square mx-auto'
              />
            </picture>
            <div className='flex flex-col text-center mt-2'>
              {card.books.map((book, index) => (
                <Button type='yellow' as='link' href={book.link} key={index}>
                  {book.name}
                </Button>
              ))}
              <Button type='yellow' as='link' href='/hsk-audios'>
                {t('ListenAudios')}
              </Button>
              <Button type='yellow' as='link' href='/hsk-mock-test'>
                {t('MockTest')}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
