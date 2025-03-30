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
  <div>
    <Title>{title}</Title>
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

const Title = styled.summary`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 10px;
`
