import React from 'react';
import { useTranslations } from 'next-intl';
import { Hero } from '@/src/app/components/Hero';
import { Accordion } from 'radix-ui';
import {
  AccordionRoot,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/src/app/components/Accordion';

export default function Page() {
  const t = useTranslations('HskAudios');

  /**
   * My ACCORDION COMPONENT COMSUMPTION
   * <Accordion type='multiple' defaultValue='' collapsible>
   *   <AccordionItem>
   *     <AccordionTrigger>HSK 1</AccordionTrigger>
   *     <AccordionContent>
   *       <Accordion>
   *         <AccordionItem>
   *           <AccordionTrigger>Unit 1</AccordionItem>
   *           <AccordionContent>
   *             <Audio src='/hsk-1-unit-1.mp3' />
   *             <Audio src='/hsk-1-unit-1.mp3' />
   *             <Audio src='/hsk-1-unit-1.mp3' />
   *             <Audio src='/hsk-1-unit-1.mp3' />
   *             <Audio src='/hsk-1-unit-1.mp3' />
   *           </AccordionContent>
   *         </AccordionItem>
   *       </Accordion>
   *     </AccordionContent>
   *   </AccordionItem>
   * </Accordion>
   */

  return (
    <>
      <Hero title={t('HeroTitle')}>
        <span className='block'>{t('HeroMessage1')}</span>
        <span className='block mt-4'>{t('HeroMessage2')}</span>
      </Hero>
      <AccordionRoot width='lg'>
        <AccordionItem value='item-1'>
          <AccordionTrigger>My header Trigger</AccordionTrigger>
          <AccordionContent>This is my content</AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2'>
          <AccordionTrigger>My header Trigger</AccordionTrigger>
          <AccordionContent>This is my content</AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-3'>
          <AccordionTrigger>My header Trigger</AccordionTrigger>
          <AccordionContent>
            TThis is my contentThis is my contentThis is my contentThis is my
            contentThis is my contentThis is my contentThis is my contentThis is
            my contenthis is my content
          </AccordionContent>
        </AccordionItem>
      </AccordionRoot>
      <br />
      <p>Default accordion:</p>
      <br />
      <Accordion.Root type='single' defaultValue='item-1' collapsible>
        <Accordion.Item value='item-1'>
          <Accordion.Header>
            <Accordion.Trigger>My header trigger</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>This is my content</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value='item-2'>
          <Accordion.Header>
            <Accordion.Trigger>My header trigger</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>This is my content</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value='item-3'>
          <Accordion.Header>
            <Accordion.Trigger>My header trigger</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>This is my content</Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </>
  );
}
