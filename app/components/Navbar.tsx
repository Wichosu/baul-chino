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

  const onClickMenu = () => {
    setOpenMenu((bool) => !bool)
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
          <Figure onClick={onClickMenu}>
            <Image alt="close button" src={'/x.svg'} width={30} height={30} />
          </Figure>
          <NavLink onClick={onClickMenu} href={'/'}>Inicio</NavLink>
          <NavLink onClick={onClickMenu} href={'/mazos-anki'}>Mazos Anki</NavLink>
        </SideBarContainer>
      </SideBar>
      <Container>
        <Title href={'/'}>Baúl Chino</Title>
        <Figure onClick={onClickMenu}>
          <Image alt="menu button" src={'/menu.svg'} width={30} height={30} />
        </Figure>
        <NavLink href={"/"}>Inicio</NavLink>
        <NavLink href={"/mazos-anki"}>Mazos Anki</NavLink>
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
  position: fixed;
  overflow: hidden;
  top: 0;
  left: -100%;
  background-color: #f5f5f5;
  transform: translateX(${props => props.$styles?.translateX});
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