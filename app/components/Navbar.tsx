"use client"
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface IMenuStyles {
  translateX: string
}

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const closeMenu = () => {
    setOpenMenu(() => false)
  }

  let menuStyles: IMenuStyles

  if(openMenu) {
    menuStyles = {
      translateX: "100%",
    }
  } else {
    menuStyles = {
      translateX: "0",
    }
  }

  return (
    <>
      <SideBar $styles={menuStyles}>
        <SideBarContainer>
          <Figure onClick={() => setOpenMenu(() => false)}>
            <Image alt="close button" src={'/x.svg'} width={30} height={30} />
          </Figure>
          <NavLink onClick={closeMenu} href={'/'}>Inicio</NavLink>
          <NavLink onClick={closeMenu} href={'/mazos-anki'}>Mazos Anki</NavLink>
          <NavLink onClick={closeMenu} href={'/libros-hsk'}>Libros HSK</NavLink>
          <NavLink onClick={closeMenu} href={'/canales'}>Lista de Canales</NavLink>
          <NavLink onClick={closeMenu} href={'/hanzi'}>Escritura de Hanzi</NavLink>
          <NavLink onClick={closeMenu} href={'/plantillas'}>Plantillas</NavLink>
          <NavLink onClick={closeMenu} href={'/plantillas/generador'}>Generador de Plantillas</NavLink>
        </SideBarContainer>
      </SideBar>
      <Container>
        <Title href={'/'}>Baúl Chino</Title>
        <Figure onClick={() => setOpenMenu(() => true)}>
          <Image alt="menu button" src={'/menu.svg'} width={30} height={30} />
        </Figure>
        <NavLink href={"/"}>Inicio</NavLink>
        <NavLink href={"/mazos-anki"}>Mazos Anki</NavLink>
        <NavLink href={'/libros-hsk'}>Libros HSK</NavLink>
        <NavLink href={'/canales'}>Lista de Canales</NavLink>
        <NavLink href={'/hanzi'}>Escritura de Hanzi</NavLink>
        <DropDownMenu>
          <NavLink href={'/plantillas'}>Plantillas <DownArrow /></NavLink>
          <DropDownContent>
            <NavLink href={'/plantillas/generador'}>Generador de Plantillas</NavLink>
          </DropDownContent>
        </DropDownMenu>
      </Container>
    </>
  );
}

const Container = styled.nav`
  display: flex;
  align-items: baseline;
  width: 85%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Title = styled(Link)`
  display: inline;
  font-size: 2rem;
  font-weight: 500;
  margin-right: auto;
  text-decoration: none;
  color: black;
`;

const SideBar = styled.div<{ $styles?: IMenuStyles; }>`
  isolation: isolate;
  z-index: 100;
  position: fixed;
  overflow: hidden;
  top: 0;
  left: -100%;
  background-color: #f5f5f5;
  transform: translateX(${props => props.$styles?.translateX});
  transition: 500ms ease;
  width: 100%;
  height: calc(100% + 80px);

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

const Figure = styled.figure`
  ${SideBarContainer} & {
    margin-left: auto;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  display: none;
  color: hsl(221, 83%, 53%);
  font-size: 1.25rem;
  margin-top: 20px;
  text-decoration: none;

  ${SideBarContainer} & {
    display: block;
  }

  @media (min-width: 768px) {
    display: block;
    margin-right: 20px;
  }
`;

const DropDownContent = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: hsl(0, 0%, 88%);
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  display: none;

  & ${NavLink} {
    margin: 0;
  }
`

const DropDownMenu = styled.div`
  position: relative;

  & ${NavLink}:hover + ${DropDownContent} {
    display: block;
  }

  & ${DropDownContent}:hover {
    display: block;
  }
`

const DownArrow = styled.span`
  border: solid black;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 2px;
  margin-bottom: 5px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
`