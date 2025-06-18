import { CompoundCard } from "@/src/app/components/Card";
import { StaticImageData } from "next/image";
import HSK1 from "@/src/app/images/hsk1.png"
import HSK2 from "@/src/app/images/hsk2.png"
import HSK3 from "@/src/app/images/hsk3.png"
import HSK4 from "@/src/app/images/hsk4.png"
import HSK5 from "@/src/app/images/hsk5.jpg"
import HSK6 from "@/src/app/images/hsk6.jpg"
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Book = {
  name: string,
  link: string
}

type Card = {
  name: string,
  img: string | StaticImageData,
  books: Book[]
}

function createBook(name: string, link: string): Book {
  return {
    name: name,
    link: link
  }
}

function createCard(name: string, img: string | StaticImageData, books: Book[]): Card {
  return {
    name: name,
    img: img,
    books: books
  }
}

const BookCards = [
  createCard('HSK-1', HSK1, [
    createBook('HSK-1-TEXTBOOK', 'https://drive.google.com/file/d/1mFknn3Br7Agm8grJqe2GljOUzTaEmMG7/view?usp=sharing'),
    createBook('HSK-1-WORKBOOK', 'https://drive.google.com/file/d/1XNHgGXIqKAUq6W2-bnaF5GB-QKgk34Im/view?usp=sharing'),
  ]),
  createCard('HSK-2', HSK2, [
    createBook('HSK-2-TEXTBOOK', 'https://drive.google.com/file/d/1lBEXmHlaOdY65u_f8EfR4Bpj3vbbxG0l/view?usp=sharing'),
    createBook('HSK-2-WORKBOOK', 'https://drive.google.com/file/d/1kcWivHKplSZ6xpyQzv5oTBCMO4jj3zn-/view?usp=sharing'),
  ]),
  createCard('HSK-3', HSK3, [
    createBook('HSK-3-TEXTBOOK', 'https://drive.google.com/file/d/1xbmulSI8NcEk6VByYajS-P0WMg8T1brn/view?usp=sharing'),
    createBook('HSK-3-WORKBOOK', 'https://drive.google.com/file/d/1U4DSrND68LQt_khgPSwyex7TiJPfZPgl/view?usp=sharing'),
  ]),
  createCard('HSK-4', HSK4, [
    createBook('HSK-4A-TEXTBOOK', 'https://drive.google.com/file/d/17y8Nfq0LWRn7ddF3JgYEQTp0dr-Tulxf/view?usp=sharing'),
    createBook('HSK-4A-WORKBOOK', 'https://drive.google.com/file/d/19C0GVcYbulG8W2lUp7d3JbVkLQ5SEyV6/view?usp=sharing'),
    createBook('HSK-4B-TEXTBOOK', 'https://drive.google.com/file/d/13pig_-Tw3P0S7lPpmc30LQK8NxUvDT2_/view?usp=sharing'),
    createBook('HSK-4B-WORKBOOK', 'https://drive.google.com/file/d/1QvQra8cWsqUguI8Y4XUzV4vdpvLG4_WZ/view?usp=sharing'),
  ]),
  createCard('HSK-5', HSK5, [
    createBook('HSK-5A-TEXTBOOK', 'https://drive.google.com/file/d/1rJ6OvvWSpvuJmmvTArOOJhLyHjNnYGWJ/view?usp=sharing'),
    createBook('HSK-5A-WORKBOOK', 'https://drive.google.com/file/d/14QbkzaCUtRttf_QAtOoQKYrDfMiT3fjL/view?usp=sharing'),
    createBook('HSK-5B-TEXTBOOK', 'https://drive.google.com/file/d/1DgC7WQRwqU7u6mYlj7v5XbCd8107u92d/view?usp=sharing'),
    createBook('HSK-5B-WORKBOOK', 'https://drive.google.com/file/d/1RF9imDi1_FarkaCJ0R44prJzyu25wIgz/view?usp=sharing'),
  ]),
  createCard('HSK-6', HSK6, [
    createBook('HSK-6A-TEXTBOOK', 'https://drive.google.com/file/d/1JrHI-AEyuTe2x9Lp_PHMnApe1dhkvjvQ/view?usp=sharing'),
    createBook('HSK-6A-WORKBOOK', 'https://drive.google.com/file/d/1urdLjV1Qnsmc2NLvViV_l9bdt6TBNc6O/view?usp=sharing'),
    createBook('HSK-6B-TEXTBOOK', 'https://drive.google.com/file/d/1w7KLfxIvNB9H00Zka5Oc2B6tvxW_WTW4/view?usp=sharing'),
    createBook('HSK-6B-WORKBOOK', 'https://drive.google.com/file/d/1bsADrkgkBDR9vkxmHxDM94VYj2YAIZ49/view?usp=sharing'),
  ])
]

export default function ListContainer() {
  const t = useTranslations('HskBooks.ListContainer')

  return (
    <section>
      <h3 className="text-2xl text-black font-medium my-5">{t('Title')}</h3>
      <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
        {
          BookCards.map((card, index) => (
            <CompoundCard key={index}>
              <CompoundCard.Header>
                <CompoundCard.Header.Title className="text-3xl">{ card.name }</CompoundCard.Header.Title>
              </CompoundCard.Header>
              <CompoundCard.Content>
                <Image src={card.img} width={500} height={500} alt={card.name} className="mx-auto" />
              </CompoundCard.Content>
              <CompoundCard.Footer className="flex flex-row flex-wrap gap-4 justify-center">
                {
                  card.books.map((book) => (
                    <Button key={book.name} asChild className={cn("bg-blue-700 hover:bg-blue-800 w-full")}>
                      <Link href={book.link} target="_blank" className="text-white">{ book.name }</Link>
                    </Button>
                  ))
                }
              </CompoundCard.Footer>
            </CompoundCard>
          ))
        }
      </div>
    </section>
  )
};
