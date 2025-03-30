"use client";
import Image from "next/image";
import styled from "styled-components";

type FilterMenuProps = {
  isOpen: boolean,
  onClose: () => void,
  children: React.ReactNode,
  cleanFilters: () => void,
  toggleFilter: () => void
}
export const FilterMenu = ({ isOpen, onClose, children, cleanFilters, toggleFilter }: FilterMenuProps) => {
  const translateX = isOpen ? "100%" : "0";

  return (
    <Sidebar $translateX={translateX}>
      <SidebarContainer>
        <CloseButton onClick={onClose}>
          <Image alt="close button" src="/x.svg" width={30} height={30} />
        </CloseButton>
        {children}
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
      </SidebarContainer>
    </Sidebar>
  );
};

const Sidebar = styled.div<{ $translateX?: string; }>`
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

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
`

const CloseButton = styled.figure`
  margin-left: auto;
  cursor: pointer;
`;

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
  
  ${SidebarContainer} & {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }

  @media (min-width: 768px) {
    display: inline-block;
  }
`