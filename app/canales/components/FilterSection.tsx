"use client";
import styled from "styled-components";
import FilterButton from "./FilterButton";

interface FilterSectionProps {
  title: string;
  items: Array<{ id: number; name: string; }>;
  onAdd: (id: number) => void;
  onRemove: (id: number) => void;
  resetTrigger: boolean;
  onResetComplete: () => void;
}

export const FilterSection = ({
  title, items, onAdd, onRemove, resetTrigger, onResetComplete
}: FilterSectionProps) => (
  <Container>
    <Title>{title}</Title>
    <FlexContainer>
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
    </FlexContainer>
  </Container>
);

const Title = styled.summary`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 10px;
`
const Container = styled.div`
  @media (min-width: 768px) {
    display: block;
  }
`
const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  overflow: auto;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
`
