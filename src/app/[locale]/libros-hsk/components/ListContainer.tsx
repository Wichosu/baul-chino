import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Card from '@/src/app/components/NewCard';
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
  books: Book[]
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
        'https://drive.google.com/file/d/1mFknn3Br7Agm8grJqe2GljOUzTaEmMG7/view?usp=sharing'
      ),
      createBook(
        'HSK-1-WORKBOOK',
        'https://drive.google.com/file/d/1XNHgGXIqKAUq6W2-bnaF5GB-QKgk34Im/view?usp=sharing'
      ),
    ]
  ),
  createCard(
    'HSK-2',
    '/hskbooks/hsk2.avif',
    'Picture of both HSK 2 books',
    '/hskbooks/hsk2.jpg',
    [
      createBook(
        'HSK-2-TEXTBOOK',
        'https://drive.google.com/file/d/1lBEXmHlaOdY65u_f8EfR4Bpj3vbbxG0l/view?usp=sharing'
      ),
      createBook(
        'HSK-2-WORKBOOK',
        'https://drive.google.com/file/d/1kcWivHKplSZ6xpyQzv5oTBCMO4jj3zn-/view?usp=sharing'
      ),
    ]
  ),
  createCard(
    'HSK-3',
    '/hskbooks/hsk3.avif',
    'Picture of both HSK 3 books',
    '/hskbooks/hsk3.jpg',
    [
      createBook(
        'HSK-3-TEXTBOOK',
        'https://drive.google.com/file/d/1xbmulSI8NcEk6VByYajS-P0WMg8T1brn/view?usp=sharing'
      ),
      createBook(
        'HSK-3-WORKBOOK',
        'https://drive.google.com/file/d/1U4DSrND68LQt_khgPSwyex7TiJPfZPgl/view?usp=sharing'
      ),
    ]
  ),
  createCard(
    'HSK-4',
    '/hskbooks/hsk4.avif',
    'Picture of both HSK 4 books',
    '/hskbooks/hsk4.jpg',
    [
      createBook(
        'HSK-4A-TEXTBOOK',
        'https://drive.google.com/file/d/17y8Nfq0LWRn7ddF3JgYEQTp0dr-Tulxf/view?usp=sharing'
      ),
      createBook(
        'HSK-4A-WORKBOOK',
        'https://drive.google.com/file/d/19C0GVcYbulG8W2lUp7d3JbVkLQ5SEyV6/view?usp=sharing'
      ),
      createBook(
        'HSK-4B-TEXTBOOK',
        'https://drive.google.com/file/d/13pig_-Tw3P0S7lPpmc30LQK8NxUvDT2_/view?usp=sharing'
      ),
      createBook(
        'HSK-4B-WORKBOOK',
        'https://drive.google.com/file/d/1QvQra8cWsqUguI8Y4XUzV4vdpvLG4_WZ/view?usp=sharing'
      ),
    ]
  ),
  createCard(
    'HSK-5',
    '/hskbooks/hsk5.avif',
    'Picture of both HSK 5 books',
    '/hskbooks/hsk5.jpg',
    [
      createBook(
        'HSK-5A-TEXTBOOK',
        'https://drive.google.com/file/d/1rJ6OvvWSpvuJmmvTArOOJhLyHjNnYGWJ/view?usp=sharing'
      ),
      createBook(
        'HSK-5A-WORKBOOK',
        'https://drive.google.com/file/d/14QbkzaCUtRttf_QAtOoQKYrDfMiT3fjL/view?usp=sharing'
      ),
      createBook(
        'HSK-5B-TEXTBOOK',
        'https://drive.google.com/file/d/1DgC7WQRwqU7u6mYlj7v5XbCd8107u92d/view?usp=sharing'
      ),
      createBook(
        'HSK-5B-WORKBOOK',
        'https://drive.google.com/file/d/1RF9imDi1_FarkaCJ0R44prJzyu25wIgz/view?usp=sharing'
      ),
    ]
  ),
  createCard(
    'HSK-6',
    '/hskbooks/hsk6.avif',
    'Picture of both HSK 6 books',
    '/hskbooks/hsk6.jpg',
    [
      createBook(
        'HSK-6A-TEXTBOOK',
        'https://drive.google.com/file/d/1JrHI-AEyuTe2x9Lp_PHMnApe1dhkvjvQ/view?usp=sharing'
      ),
      createBook(
        'HSK-6A-WORKBOOK',
        'https://drive.google.com/file/d/1urdLjV1Qnsmc2NLvViV_l9bdt6TBNc6O/view?usp=sharing'
      ),
      createBook(
        'HSK-6B-TEXTBOOK',
        'https://drive.google.com/file/d/1w7KLfxIvNB9H00Zka5Oc2B6tvxW_WTW4/view?usp=sharing'
      ),
      createBook(
        'HSK-6B-WORKBOOK',
        'https://drive.google.com/file/d/1bsADrkgkBDR9vkxmHxDM94VYj2YAIZ49/view?usp=sharing'
      ),
    ]
  ),
];

export default function ListContainer() {
  const t = useTranslations('HskBooks.ListContainer');

  return (
    <section>
      <h2 className='text-2xl text-black font-medium my-5'>{t('Title')}</h2>
      <div className='grid gap-8 lg:grid-cols-2 xl:grid-cols-3'>
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
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
