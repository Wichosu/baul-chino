'use client';
import { ILanguage } from '../interfaces/ILanguage';
import { IChannel } from '../interfaces/IChannel';
import { ICategory } from '../interfaces/ICategory';
import {
  useMemo,
  useSyncExternalStore,
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

//The URL is the single source of truth for filter selection (?cat=1,3&lang=2)
//so refresh, back/forward and shared links all keep the same view.
//history.replaceState + a custom event is used instead of useSearchParams so
//the page stays a cached (ISR) render.
const FILTERS_CHANGE_EVENT = 'canales-filters-change';

//stable empty array for getServerSnapshot (must not be re-created per call)
const EMPTY_IDS: number[] = [];

//getSnapshot must return a stable reference for the same search string,
//otherwise useSyncExternalStore re-renders in a loop — cache per search value
let cachedSearch: string | null = null;
let cachedIds: Record<string, number[]> = { cat: [], lang: [] };

function getIdsFromUrl(key: string): number[] {
  const search = window.location.search;
  if (search !== cachedSearch) {
    cachedSearch = search;
    cachedIds = {
      cat: parseIds(new URLSearchParams(search).get('cat')),
      lang: parseIds(new URLSearchParams(search).get('lang')),
    };
  }
  return cachedIds[key];
}

function parseIds(raw: string | null): number[] {
  if (!raw) return [];
  return raw
    .split(',')
    .map(Number)
    .filter((n) => !Number.isNaN(n));
}

function writeIdsToUrl(key: string, ids: number[]) {
  const params = new URLSearchParams(window.location.search);
  if (ids.length > 0) {
    params.set(key, ids.join(','));
  } else {
    params.delete(key);
  }
  const query = params.toString();
  const url = `${window.location.pathname}${query ? `?${query}` : ''}`;
  window.history.replaceState(window.history.state, '', url);
  window.dispatchEvent(new Event(FILTERS_CHANGE_EVENT));
}

function subscribeToUrlFilters(onStoreChange: () => void) {
  window.addEventListener(FILTERS_CHANGE_EVENT, onStoreChange);
  window.addEventListener('popstate', onStoreChange);
  return () => {
    window.removeEventListener(FILTERS_CHANGE_EVENT, onStoreChange);
    window.removeEventListener('popstate', onStoreChange);
  };
}

function useUrlFilterIds(key: string): [number[], Dispatch<SetStateAction<number[]>>] {
  const ids = useSyncExternalStore(
    subscribeToUrlFilters,
    () => getIdsFromUrl(key),
    () => EMPTY_IDS
  );
  const setIds: Dispatch<SetStateAction<number[]>> = (action) => {
    const next = typeof action === 'function' ? action(ids) : action;
    writeIdsToUrl(key, next);
  };
  return [ids, setIds];
}

export default function Filter({
  FetchedLanguages,
  FetchedCategories,
  FetchedChannels,
}: Props) {
  const t = useTranslations('Channels.Filter');
  const tCommon = useTranslations('Common');
  const [selectedLanguage, setSelectedLanguage] = useUrlFilterIds('lang');
  const [selectedCategory, setSelectedCategory] = useUrlFilterIds('cat');

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
          className='cursor-pointer min-h-11 inline-flex items-center px-4 ml-2.5 border-none rounded-lg bg-red-600 text-xl text-white font-medium lg:mr-5'
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
