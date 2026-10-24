'use client';
import { ILanguage } from '../interfaces/ILanguage';
import { IChannel } from '../interfaces/IChannel';
import { ICategory } from '../interfaces/ICategory';
import {
  useState,
  useMemo,
  useEffect,
  useRef,
  createContext,
  Dispatch,
  SetStateAction,
} from 'react';
import ChannelsList from './ChannelsList';
import LanguageFilters from './LanguageFilter';
import CategoriesFilter from './CategoriesFilter';
import { useTranslations } from 'next-intl';
import { EmptyState } from '@/src/app/components/EmptyState/EmptyState';
import { Button } from '@/src/app/components/Button';

type Props = {
  FetchedLanguages: ILanguage[];
  FetchedCategories: ICategory[];
  FetchedChannels: IChannel[];
};

type FilterContext = {
  FetchedLanguages: ILanguage[];
  FetchedCategories: ICategory[];
  selectedLanguage: number[];
  setSelectedLanguage: Dispatch<SetStateAction<number[]>>;
  selectedCategory: number[];
  setSelectedCategory: Dispatch<SetStateAction<number[]>>;
};

export const FilterContext = createContext({
  FetchedLanguages: [],
  FetchedCategories: [],
  selectedLanguage: [],
  setSelectedLanguage: () => {},
  selectedCategory: [],
  setSelectedCategory: () => {},
} as FilterContext);

export default function Filter({
  FetchedLanguages,
  FetchedCategories,
  FetchedChannels,
}: Props) {
  const t = useTranslations('Channels.Filter');
  const tCommon = useTranslations('Common');
  // Start with empty selection arrays instead of all items selected
  const [selectedLanguage, setSelectedLanguage] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number[]>([]);

  // Client-side filtering mirrors the old inner-join query: a channel passes
  // when it has at least one selected category AND one selected language
  // (an empty selection means no restriction on that axis)
  const filteredChannels = useMemo(
    () =>
      FetchedChannels.filter(
        (channel) =>
          (selectedCategory.length === 0 ||
            channel.channel_category.some(({ category }) =>
              selectedCategory.includes(category.id)
            )) &&
          (selectedLanguage.length === 0 ||
            channel.channel_language.some(({ language }) =>
              selectedLanguage.includes(language.id)
            ))
      ),
    [FetchedChannels, selectedCategory, selectedLanguage]
  );

  //Restore filter selection from the URL on mount (?cat=1,3&lang=2) so
  //refresh, back/forward and shared links keep the same view
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get('cat');
    const lang = params.get('lang');
    if (cat) {
      setSelectedCategory(
        cat
          .split(',')
          .map(Number)
          .filter((n) => !Number.isNaN(n))
      );
    }
    if (lang) {
      setSelectedLanguage(
        lang
          .split(',')
          .map(Number)
          .filter((n) => !Number.isNaN(n))
      );
    }
  }, []);

  //Reflect the selection back into the URL. Uses history.replaceState instead
  //of useSearchParams so the page stays a cached (ISR) render.
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const params = new URLSearchParams(window.location.search);
    if (selectedCategory.length > 0) {
      params.set('cat', selectedCategory.join(','));
    } else {
      params.delete('cat');
    }
    if (selectedLanguage.length > 0) {
      params.set('lang', selectedLanguage.join(','));
    } else {
      params.delete('lang');
    }
    const query = params.toString();
    const url = `${window.location.pathname}${query ? `?${query}` : ''}`;
    window.history.replaceState(null, '', url);
  }, [selectedCategory, selectedLanguage]);

  //Clean Filters
  const cleanFilters = () => {
    setSelectedLanguage([]);
    setSelectedCategory([]);
  };

  return (
    <FilterContext.Provider
      value={{
        FetchedLanguages,
        FetchedCategories,
        selectedLanguage,
        setSelectedLanguage,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      <section>
        <h2 className='inline-block text-3xl text-black font-medium my-2.5 lg:mr-10'>
          {t('Title')}
        </h2>
        <button
          onClick={cleanFilters}
          className='cursor-pointer py-1 px-2.5 ml-2.5 border-none rounded-lg bg-red-600 text-xl text-white font-medium lg:mr-5'
        >
          {t('ActionButton')}
        </button>
        <LanguageFilters />
        <CategoriesFilter />
        {filteredChannels.length === 0 ? (
          <EmptyState
            title={tCommon('Empty.NoResultsTitle')}
            message={tCommon('Empty.NoResultsMessage')}
          >
            <Button type='primary' onClick={cleanFilters}>
              {t('ActionButton')}
            </Button>
          </EmptyState>
        ) : (
          <ChannelsList dataChannel={filteredChannels} />
        )}
      </section>
    </FilterContext.Provider>
  );
}
