"use client"
import styled from "styled-components";
import { useRef } from "react";
import generatePDF from "react-to-pdf";

//mm units
const GridGap = 0

const SquareCount = 330

export default function Test() {
  const targetRef = useRef<HTMLDivElement>(null!)

  const toPDF = () => {
    generatePDF(targetRef, { filename: "test.pdf" })
  }

  return (
    <>
      <Container>
        <button onClick={toPDF}>download</button>
        <h2>Test</h2>
        <PDF ref={targetRef}>
          <Page>
            <WebsiteUrl>www.baulchino.com</WebsiteUrl>
            <Headers>
              <Title>Nombre:</Title>
              <SubHeaders>
                <Title>Fecha:</Title>
                <Title>Calificación:</Title>
              </SubHeaders>
            </Headers>
            <Grid $gap={GridGap}>
              {
                Array.from({ length: SquareCount }).map((_, index) => (
                  <Square key={index} />
                ))
              }
            </Grid>
          </Page>
        </PDF>
      </Container>
    </>
  )
}

const Container = styled.section`
  width: 85%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const PDF = styled.div`
  width: fit-content;
  height: fit-content;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  border: 1px solid black;
`

const Page = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2mm;
  width: 210mm;
  height: 297mm;
  max-width: 210mm;
  max-height: 297mm;
`

const Headers = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  margin: 0 auto;
`

const SubHeaders = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30mm;
  margin-right: 10mm;
  margin-left: auto;
`

const Title = styled.h2`
  margin: 0;
  padding: 0;
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

//mm units
const SquareSize = 12

function Square() {
  return (
    <SquareContainer $size={SquareSize}>
      <SquareSvg>
        <line x1={0} y1={`${50}%`} x2={`${100}%`} y2={`${50}%`} stroke="#DDD" />
        <line x1={`${50}%`} y1={0} x2={`${50}%`} y2={`${100}%`} stroke="#DDD" />
        <line x1={0} y1={0} x2={`${100}%`} y2={`${100}%`} stroke="#DDD" />
        <line x1={0} y1={`${100}%`} x2={`${100}%`} y2={0} stroke="#DDD" />
      </SquareSvg>
    </SquareContainer>
  )
}

const SquareContainer = styled.div<{ $size?: number }>`
  display: inline-block;
  width: ${props => props.$size ? `${props.$size}mm` : "20mm"};
  height: ${props => props.$size ? `${props.$size}mm` : "20mm"};
`

const SquareSvg = styled.svg`
  width: 100%;
  height: 100%;
  border: 1px solid black;
`