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
        'https://71bzg7q54l.ufs.sh/f/pmZgVpOF4SrlfpQRxb6UedIATMvN4WYEa10X8Px6gmt35Gju'
      ),
      createBook(
        'HSK-1-WORKBOOK',
        'https://71bzg7q54l.ufs.sh/f/pmZgVpOF4SrlnqICRp2i9uJc4gOLBEVtzodXQemjTIxb6SlY'
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
        'https://71bzg7q54l.ufs.sh/f/pmZgVpOF4Srl288dPpEDSyXihkmPQfr0vjdRonIwVbNGzusg'
      ),
      createBook(
        'HSK-2-WORKBOOK',
        'https://71bzg7q54l.ufs.sh/f/pmZgVpOF4SrlyP9pstkB7tDUVmTzWa5fin28J43MPxR91kZ6'
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
        'https://71bzg7q54l.ufs.sh/f/pmZgVpOF4SrlQcuGkb14SFyf85BlhTC1c6wtZJINpVuY3EDo'
      ),
      createBook(
        'HSK-3-WORKBOOK',
        'https://71bzg7q54l.ufs.sh/f/pmZgVpOF4SrlhgcvjXnf3rUnmWz5qXpjJIdhaksbMeA7xvP1'
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
        'https://71bzg7q54l.ufs.sh/f/pmZgVpOF4SrlgsH6nVEFkGsUQaCdXWO7ou3iFmYHBZMApLxq'
      ),
      createBook(
        'HSK-4A-WORKBOOK',
        'https://71bzg7q54l.ufs.sh/f/pmZgVpOF4SrlO4oUjcCRU4rdsfetVKvJP8C6NT1u39wcYbqz'
      ),
      createBook(
        'HSK-4B-TEXTBOOK',
        'https://71bzg7q54l.ufs.sh/f/pmZgVpOF4SrlgetneQFkGsUQaCdXWO7ou3iFmYHBZMApLxq8'
      ),
      createBook(
        'HSK-4B-WORKBOOK',
        'https://71bzg7q54l.ufs.sh/f/pmZgVpOF4SrllAGEoFeHM50UaZTLD93wuroWtXgfIQcshY86'
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
        'https://71bzg7q54l.ufs.sh/f/pmZgVpOF4Srl4GTaEu9xbZ0AwPmY1VJH2ofWCidn8aDyNg3G'
      ),
      createBook(
        'HSK-5A-WORKBOOK',
        'https://71bzg7q54l.ufs.sh/f/pmZgVpOF4SrlatVCrk9G69n1wbW580GxDg23iyutEadrClqV'
      ),
      createBook(
        'HSK-5B-TEXTBOOK',
        'https://71bzg7q54l.ufs.sh/f/pmZgVpOF4SrlUscOCYApa8b0cLnkoHqhDBOsAFuK67fEtdJe'
      ),
      createBook(
        'HSK-5B-WORKBOOK',
        'https://71bzg7q54l.ufs.sh/f/pmZgVpOF4SrlQOTx0g14SFyf85BlhTC1c6wtZJINpVuY3EDo'
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
        'https://71bzg7q54l.ufs.sh/f/pmZgVpOF4SrluJ0fOCHmfNGTF5xtPKRWzgk329eEZJS1nIHl'
      ),
      createBook(
        'HSK-6A-WORKBOOK',
        'https://71bzg7q54l.ufs.sh/f/pmZgVpOF4SrluYogk1HmfNGTF5xtPKRWzgk329eEZJS1nIHl'
      ),
      createBook(
        'HSK-6B-TEXTBOOK',
        'https://71bzg7q54l.ufs.sh/f/pmZgVpOF4SrlA5d3ZkzD68JTVorcF4ZRUl9xpeqYPQbj320X'
      ),
      createBook(
        'HSK-6B-WORKBOOK',
        'https://71bzg7q54l.ufs.sh/f/pmZgVpOF4SrlfvGVPU6UedIATMvN4WYEa10X8Px6gmt35Gju'
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
