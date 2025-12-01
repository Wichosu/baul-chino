import { useTranslations } from 'next-intl';

export const dynamic = 'force-static';
import { Hero } from '../components/Hero';
import CardsContainer from '../components/CardsContainer';
import {
  AccordionRoot,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '../components/Accordion';

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <>
      <Hero title={t('HeroTitle')}>{t('HeroMessage')}</Hero>
      <CardsContainer />
      <section>
        <h2 className='text-center text-4xl font-medium'>{t('Q&A.Title')}</h2>
        <AccordionRoot type='single' width='xl'>
          <AccordionItem value='1' marginY='1'>
            <AccordionTrigger>{t('Q&A.Questions.HowMuch')}</AccordionTrigger>
            <AccordionContent padding='3'>
              {t('Q&A.Answers.HowMuch')}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='2' marginY='1'>
            <AccordionTrigger>{t('Q&A.Questions.Why')}</AccordionTrigger>
            <AccordionContent padding='3'>
              {t('Q&A.Answers.Why')}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='3' marginY='1'>
            <AccordionTrigger>{t('Q&A.Questions.Ideas')}</AccordionTrigger>
            <AccordionContent padding='3'>
              {t('Q&A.Answers.Ideas')}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='4' marginY='1'>
            <AccordionTrigger>{t('Q&A.Questions.Errors')}</AccordionTrigger>
            <AccordionContent padding='3'>
              {t('Q&A.Answers.Errors')}
            </AccordionContent>
          </AccordionItem>
        </AccordionRoot>
      </section>
    </>
  );
}
