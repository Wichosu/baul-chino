import ListItem from './ListItem';
import { useTranslations } from 'next-intl';

const enAnkiDecks = [
  //EN decks
  {
    name: 'EN-HSK-1',
    link: 'https://71bzg7q54l.ufs.sh/f/pmZgVpOF4SrlyE1Iw0kB7tDUVmTzWa5fin28J43MPxR91kZ6',
  },
  {
    name: 'EN-HSK-2',
    link: 'https://71bzg7q54l.ufs.sh/f/pmZgVpOF4SrlnYlVwYp2i9uJc4gOLBEVtzodXQemjTIxb6Sl',
  },
  {
    name: 'EN-HSK-3',
    link: 'https://71bzg7q54l.ufs.sh/f/pmZgVpOF4SrlC5i8hLg4Nl8DfCykJj0hU1AWL2waumV7eSQs',
  },
  {
    name: 'EN-HSK-4A',
    link: 'https://71bzg7q54l.ufs.sh/f/pmZgVpOF4SrlrjM8xTZJ0BOapDSC138ZnuKRx56mwreEqjVh',
  },
];

const esAnkiDecks = [
  //ES decks
  {
    name: 'ES-HSK-1',
    link: 'https://71bzg7q54l.ufs.sh/f/pmZgVpOF4SrlCJuYTpMg4Nl8DfCykJj0hU1AWL2waumV7eSQ',
  },
  {
    name: 'ES-HSK-2',
    link: 'https://71bzg7q54l.ufs.sh/f/pmZgVpOF4SrlAmGcJAzD68JTVorcF4ZRUl9xpeqYPQbj320X',
  },
  {
    name: 'ES-HSK-3',
    link: 'https://71bzg7q54l.ufs.sh/f/pmZgVpOF4SrlOk5bcdCRU4rdsfetVKvJP8C6NT1u39wcYbqz',
  },
  {
    name: 'ES-HSK-4A',
    link: 'https://71bzg7q54l.ufs.sh/f/pmZgVpOF4SrlatAmTs2G69n1wbW580GxDg23iyutEadrClqV',
  },
];

export default function ListContainer() {
  const t = useTranslations('AnkiDecks.ListContainer');

  return (
    <section>
      <BlockWrapper>
        <Title>{t('TitleEn')}</Title>
        <Description>{t('DescriptionEn')}</Description>
        {enAnkiDecks.map((e, index) => (
          <ListItem key={index} linkRef={e.link} linkName={e.name} />
        ))}
      </BlockWrapper>
      <BlockWrapper>
        <Title>{t('TitleEs')}</Title>
        <Description>{t('DescriptionEs')}</Description>
        {esAnkiDecks.map((e, index) => (
          <ListItem key={index} linkRef={e.link} linkName={e.name} />
        ))}
      </BlockWrapper>
    </section>
  );
}

function BlockWrapper({ children }: { children: React.ReactNode }) {
  return <article className='inline-block mr-20'>{children}</article>;
}

function Title({ children }: { children: string }) {
  return <h3 className='text-3xl text-black font-medium mt-5'>{children}</h3>;
}

function Description({ children }: { children: string }) {
  return (
    <p className='text-xl text-black font-normal m-0 p-0 mb-5'>{children}</p>
  );
}
