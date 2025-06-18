import ListItem from "./ListItem";
import { useTranslations } from "next-intl";

const enAnkiDecks = [
  //EN decks
  {
    name: 'EN-HSK-1',
    link: '/EN-HSK-1.apkg'
  },
  {
    name: 'EN-HSK-2',
    link: '/EN-HSK-2.apkg'
  },
  {
    name: 'EN-HSK-3',
    link: '/EN-HSK-3.apkg'
  },
  {
    name: 'EN-HSK-4A',
    link: '/EN-HSK-4A.apkg'
  },
];

const esAnkiDecks = [
  //ES decks
  {
    name: 'ES-HSK-1',
    link: '/ES-HSK-1.apkg'
  },
  {
    name: 'ES-HSK-2',
    link: '/ES-HSK-2.apkg'
  },
  {
    name: 'ES-HSK-3',
    link: '/ES-HSK-3.apkg'
  },
  {
    name: 'ES-HSK-4A',
    link: '/ES-HSK-4A.apkg'
  }
]

export default function ListContainer() {
  const t = useTranslations('AnkiDecks.ListContainer')

  return (
    <section>
      <BlockWrapper>
        <Title>{t('TitleEn')}</Title>
        <Description>{t('DescriptionEn')}</Description>
        {
          enAnkiDecks.map((e, index) => (
            <ListItem 
            key={index} 
            linkRef={e.link}
            linkName={e.name}
            />
          ))
        }
      </BlockWrapper>
      <BlockWrapper>
        <Title>{t('TitleEs')}</Title>
        <Description>{t('DescriptionEs')}</Description>
        {
          esAnkiDecks.map((e, index) => (
            <ListItem 
            key={index}
            linkRef={e.link}
            linkName={e.name}
            />
          ))
        }
      </BlockWrapper>
    </section>
  )
};

function BlockWrapper({ children }: { children: React.ReactNode }) {
  return (
    <article className="inline-block mr-20">
      { children }
    </article>
  )
}

function Title({ children }: { children: string }) {
  return (
    <h3 className="text-3xl text-black font-medium mt-5">
      { children }
    </h3>
  )
}

function Description({ children }: { children: string }) {
  return (
    <p className="text-xl text-black font-normal m-0 p-0 mb-5">
      { children }
    </p>
  )
}