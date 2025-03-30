"use client"
import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { createClient } from "@/app/utils/supabase/client";
import { ILanguage } from "../interfaces/ILanguage";
import { IChannel } from "../interfaces/IChannel";
import { ICategory } from "../interfaces/ICategory";
import FilterButton from "./FilterButton";
import ChannelsList from "./ChannelsList";

// Custom hook for filter logic
const useFilterSelection = <T extends number>(initial: T[] = []) => {
  const [selected, setSelected] = useState<T[]>(initial);
  const [resetTrigger, setResetTrigger] = useState(false);

  const addId = useCallback((id: T) => {
    setSelected(prev => prev.includes(id) ? prev : [...prev, id]);
  }, []);

  const removeId = useCallback((id: T) => {
    setSelected(prev => prev.filter(item => item !== id));
  }, []);

  const reset = useCallback(() => {
    setSelected([]);
    setResetTrigger(true);
  }, []);

  const clearTrigger = useCallback(() => {
    setResetTrigger(false);
  }, []);

  return { selected, addId, removeId, reset, resetTrigger, clearTrigger };
};

// Custom hook for channel filtering
const useFilteredChannels = (
  channels: IChannel[],
  languageIds: number[],
  categoryIds: number[],
  allLanguages: ILanguage[],
  allCategories: ICategory[]
) => {
  const [filteredChannels, setFilteredChannels] = useState<IChannel[]>(channels);
  const supabase = createClient();

  useEffect(() => {
    const fetchFilteredChannels = async () => {
      const languages = languageIds.length ? languageIds : allLanguages.map(l => l.id);
      const categories = categoryIds.length ? categoryIds : allCategories.map(c => c.id);

      try {
        const { data, error } = await supabase
          .from('channel')
          .select(`
            *,
            channel_category!inner (category!inner (id, name)),
            channel_language!inner (language!inner (id, name))
          `)
          .in('channel_category.category.id', categories)
          .in('channel_language.language.id', languages);

        if (error) throw error;
        setFilteredChannels(data as IChannel[]);
      } catch (error) {
        console.error("Filter error:", error);
      }
    };

    fetchFilteredChannels();
  }, [languageIds, categoryIds, allLanguages, allCategories, supabase]);

  return filteredChannels;
};

interface FilterMenuProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const FilterMenu: React.FC<FilterMenuProps> = ({ isOpen, onClose, children }) => {
  const translateX = isOpen ? "100%" : "0";
  
  return (
    <SideBar $translateX={translateX}>
      <SideBarContainer>
        <CloseButton onClick={onClose}>
          <Image alt="close button" src="/x.svg" width={30} height={30} />
        </CloseButton>
        {children}
      </SideBarContainer>
    </SideBar>
  );
};

interface FilterSectionProps {
  title: string;
  items: Array<{ id: number; name: string }>;
  onAdd: (id: number) => void;
  onRemove: (id: number) => void;
  resetTrigger: boolean;
  onResetComplete: () => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  title,
  items,
  onAdd,
  onRemove,
  resetTrigger,
  onResetComplete
}) => (
  <div>
    <SidebarTitle>{title}</SidebarTitle>
    {items.map((item) => (
      <FilterButton
        key={item.id}
        id={item.id}
        addIdToFilter={onAdd}
        removeIdFromFilter={onRemove}
        resetTrigger={resetTrigger}
        setUpTrigger={onResetComplete}
      >
        {item.name}
      </FilterButton>
    ))}
  </div>
);

type Props = {
  FetchedLanguages: ILanguage[];
  FetchedCategories: ICategory[];
  FetchedChannels: IChannel[];
};

export default function Filter({ FetchedLanguages, FetchedCategories, FetchedChannels }: Props) {
  const [openFilter, setOpenFilter] = useState(false);
  
  // Language filter management
  const {
    selected: selectedLanguage,
    addId: addIdToLanguageFilter,
    removeId: removeIdFromLanguageFilter,
    reset: resetLanguageFilter,
    resetTrigger: languageResetTrigger,
    clearTrigger: clearLanguageTrigger
  } = useFilterSelection<number>();

  // Category filter management
  const {
    selected: selectedCategory,
    addId: addIdToCategoryFilter,
    removeId: removeIdFromCategoryFilter,
    reset: resetCategoryFilter,
    resetTrigger: categoryResetTrigger,
    clearTrigger: clearCategoryTrigger
  } = useFilterSelection<number>();

  // Get filtered channels
  const dataChannel = useFilteredChannels(
    FetchedChannels,
    selectedLanguage,
    selectedCategory,
    FetchedLanguages,
    FetchedCategories
  );

  // Combined reset function
  const cleanFilters = useCallback(() => {
    resetLanguageFilter();
    resetCategoryFilter();
  }, [resetLanguageFilter, resetCategoryFilter]);

  const toggleFilter = useCallback(() => {
    setOpenFilter(prev => !prev);
  }, []);

  // Memoized filter sections to prevent unnecessary re-renders
  const languageFilterSection = useMemo(() => (
    <FilterSection
      title="Idiomas"
      items={FetchedLanguages}
      onAdd={addIdToLanguageFilter}
      onRemove={removeIdFromLanguageFilter}
      resetTrigger={languageResetTrigger}
      onResetComplete={clearLanguageTrigger}
    />
  ), [FetchedLanguages, addIdToLanguageFilter, removeIdFromLanguageFilter, languageResetTrigger, clearLanguageTrigger]);

  const categoryFilterSection = useMemo(() => (
    <FilterSection
      title="Categorías"
      items={FetchedCategories}
      onAdd={addIdToCategoryFilter}
      onRemove={removeIdFromCategoryFilter}
      resetTrigger={categoryResetTrigger}
      onResetComplete={clearCategoryTrigger}
    />
  ), [FetchedCategories, addIdToCategoryFilter, removeIdFromCategoryFilter, categoryResetTrigger, clearCategoryTrigger]);

  return (
    <>
      {/* Mobile Filter Menu */}
      <FilterMenu isOpen={openFilter} onClose={toggleFilter}>
        {languageFilterSection}
        {categoryFilterSection}
        <ActionButtonContainer>
          <ActionButton 
            onClick={() => {
              cleanFilters();
              toggleFilter();
            }} 
            $backgroundColor="#dc2626"
          >
            Reiniciar Filtros
          </ActionButton>
        </ActionButtonContainer>
      </FilterMenu>

      {/* Desktop Filter */}
      <Container>
        <Title>Filtros</Title>
        <ActionButtonContainer>
          <ActionButton onClick={cleanFilters} $backgroundColor="#dc2626">
            Reiniciar Filtros
          </ActionButton>
        </ActionButtonContainer>
        
        <FilterContainer>
          {languageFilterSection}
        </FilterContainer>
        
        <FilterContainer>
          {categoryFilterSection}
        </FilterContainer>
        
        <FilterMenuButton onClick={toggleFilter}>
          Abrir Menu de Filtros
        </FilterMenuButton>
        
        <ChannelsList dataChannel={dataChannel} />
      </Container>
    </>
  );
}

const CloseButton = styled.figure`
  margin-left: auto;
  cursor: pointer;
`;

const Container = styled.section`
  width: 85%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  display: none;
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    display: inline-block;
    margin-right: 40px;
  }
`;

const SideBar = styled.div<{ $translateX?: string; }>`
  position: fixed;
  overflow: auto;
  top: 0;
  left: -100%;
  background-color: #f5f5f5;
  transform: translateX(${props => props.$translateX});
  transition: 500ms ease;
  width: 100%;
  height: 100%;

  @media (min-width: 768px) {
    display: none;
  }
`

const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
`

const FilterMenuButton = styled.button`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 4px;
  border: none;
  background-color: hsl(213, 98%, 57%);
  color: #fafafa;

  @media (min-width: 768px) {
    display: none;
  }
`

const SidebarTitle = styled.summary`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 10px;
`

const ActionButton = styled.button<{ $backgroundColor?: string}>`
  cursor: pointer;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  border: none;
  border-radius: 4px;
  background-color: ${props => props.$backgroundColor || '#2687fd'};
  color: #fafafa;

  @media (min-width: 768px) {
    margin-right: 20px
  }
`
const ActionButtonContainer = styled.div`
  display: none;
  
  ${SideBarContainer} & {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }

  @media (min-width: 768px) {
    display: inline-block;
  }
`

const FilterContainer = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`