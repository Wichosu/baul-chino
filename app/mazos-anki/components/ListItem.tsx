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
  color: blue;
`