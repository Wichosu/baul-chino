"use client"
import styled from "styled-components";
import Link from "next/link";

interface Props {
  linkRef: string,
  linkName: string,
}

export default function ListItem({ linkRef, linkName }: Props) {
  return (
    <Item href={linkRef} target="_blank">{ linkName }</Item>
  )
}

const Item = styled(Link)`
  display: inline-block;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;
  width: fit-content;
  color: blue;
`