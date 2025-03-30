"use client"
import { useCallback, useMemo, useState } from "react";
import styled from "styled-components";
import { ILanguage } from "../interfaces/ILanguage";
import { IChannel } from "../interfaces/IChannel";
import { ICategory } from "../interfaces/ICategory";
import ChannelsList from "./ChannelsList";
import { useFilteredChannels } from "../hooks/useFilteredChannels";
import { FilterMenu } from "./FilterMenu";
import { useFilterSelection } from "../hooks/useFilterSelection";
import { FilterSection } from "./FilterSection";

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
      <FilterMenu isOpen={openFilter} onClose={toggleFilter} cleanFilters={cleanFilters} toggleFilter={toggleFilter}>
        {languageFilterSection}
        {categoryFilterSection}
      </FilterMenu>

      {/* Desktop Filter */}
      <Container>
        <Title>Filtros</Title>
        <ActionButtonContainer>
          <ActionButton onClick={cleanFilters} $backgroundColor="#dc2626">
            Reiniciar Filtros
          </ActionButton>
        </ActionButtonContainer>

        {languageFilterSection}

        {categoryFilterSection}

        <FilterMenuButton onClick={toggleFilter}>
          Abrir Menu de Filtros
        </FilterMenuButton>

        <ChannelsList dataChannel={dataChannel} />
      </Container>
    </>
  );
}

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

  @media (min-width: 768px) {
    display: inline-block;
  }
`