'use client';
import { useRef } from 'react';
import generatePDF from 'react-to-pdf';
import TemplateContextProvider from './TemplateContext';
import TemplateDownload from './TemplateDownload';
import GridForm from './forms/GridForm';
import SquareForm from './forms/SquareForm';
import TemplatePreview from './TemplatePreview';
import TitleForm from './forms/TitleForm';

export default function TemplateGenerator() {
  const targetRef = useRef<HTMLDivElement>(null!);

  const toPDF = async (filename: string) => {
    generatePDF(targetRef, { filename: filename });
  };

  return (
    <section>
      <TemplateContextProvider>
        <TemplateDownload toPDF={toPDF} />
        <GridForm />
        <SquareForm />
        <TitleForm />
        <TemplatePreview targetRef={targetRef} />
      </TemplateContextProvider>
    </section>
  );
}
