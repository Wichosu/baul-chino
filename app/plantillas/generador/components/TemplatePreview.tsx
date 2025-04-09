"use client"
import { Ref } from "react";
import Square from "./Square";
import TemplateHeaders from "./TemplateHeaders";
import styled from "styled-components";

type Props = {
  targetRef: Ref<HTMLDivElement>
}

//mm units
const GridGap = 0
const SquareCount = 330

export default function TemplatePreview({ targetRef }: Props) {

  return (
    <RelativeContainer>
      <PDF ref={targetRef}>
        <Page>
          <WebsiteUrl>www.baulchino.com</WebsiteUrl>
          <TemplateHeaders />
          <Grid $gap={GridGap}>
            {
              Array.from({ length: SquareCount }).map((_, index) => (
                <Square key={index} />
              ))
            }
          </Grid>
        </Page>
      </PDF>
    </RelativeContainer>
  )
}

const RelativeContainer = styled.div`
  width: 100%;
  overflow: scroll;
`

const PDF = styled.div`
  width: fit-content;
  height: fit-content;
  margin-top: 20px;
  overflow: hidden;
  border: 1px solid black;

  @media (min-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }
`

const Page = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2mm;
  width: 210mm;
  height: 297mm;
  max-width: 210mm;
  max-height: 297mm;

  @media (min-width: 768px) {
    width: 210mm;
    height: 297mm;
  }
`

const Grid = styled.div<{ $gap?: number }>`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.$gap ? `${props.$gap}mm` : `0mm`};
`

const WebsiteUrl = styled.span`
  margin: 0;
  padding: 0;
  font-size: 12pt;
  color: #888;
  text-align: center;
`