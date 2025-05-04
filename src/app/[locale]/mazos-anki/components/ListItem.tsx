"use client"
import styled from "styled-components";
import Link from "next/link";

interface Props {
  linkRef: string,
  linkName: string,
}

export default function ListItem({ linkRef, linkName }: Props) {
  return (
    <Item href={linkRef}>{ linkName }</Item>
  )
}

const Item = styled(Link)`
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.blue};
  font-weight: ${props => props.theme.fontWeights.bold};
  display: block;
  margin-top: 20px;
  margin-bottom: 20px;
  width: fit-content;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.colors.blueHover};
    text-decoration: underline;
  }
`