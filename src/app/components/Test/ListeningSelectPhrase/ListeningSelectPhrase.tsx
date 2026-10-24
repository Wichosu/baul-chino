'use client';
import React from 'react';
import { Database } from '@/src/app/types/supabase';
import Image from 'next/image';
import Audio from '@/src/app/components/Audio/Audio';
import { LetterSelect, LETTERS_ABC } from '../LetterSelect';
import { QuestionSection } from '../QuestionSection';
import { HandleListeningSelectPhraseAnswer } from '../Test.types';
import { useTranslations } from 'next-intl';

type Props = {
  questions: Database['mock_test']['Tables']['listening_select_phrase']['Row'][];
  handleListeningSelectPhraseAnswers: HandleListeningSelectPhraseAnswer;
};

export function ListeningSelectPhrase({
  questions,
  handleListeningSelectPhraseAnswers,
}: Props) {
  const t = useTranslations('Test');

  return (
    <QuestionSection
      title={t('Titles.listeningSelectPhrase')}
      description={t('Descriptions.listeningSelectPhrase')}
    >
      <div className='flex flex-col gap-16 mb-8'>
        {questions.map((question, index) => (
          <article
            key={question.id}
            className='flex flex-col items-center justify-center'
          >
            <picture className='block relative w-full h-16 mb-2'>
              <source src={question.image} width={100} height={100} />
              <Image
                src={question.imageFallback}
                alt={t('ImageAltMissing')}
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                fill
                className='object-contain'
              />
            </picture>
            <div className='flex flex-wrap gap-6 md:gap-12 justify-center items-center'>
              <Audio
                audioUrl={question.audio}
                caption={question.questionNumber}
              />
              <LetterSelect
                questionNumber={question.questionNumber}
                options={LETTERS_ABC}
                onValueChange={(value) =>
                  handleListeningSelectPhraseAnswers(
                    value,
                    index,
                    question.questionNumber
                  )
                }
              />
            </div>
          </article>
        ))}
      </div>
    </QuestionSection>
  );
}
