'use client';
import React from 'react';
import { Database } from '@/src/app/types/supabase';
import { HandleListeningMatchImageAudioAnswer } from '@/src/app/components/Test/Test.types';
import Image from 'next/image';
import Audio from '@/src/app/components/Audio/Audio';
import { LetterSelect, LETTERS_ABC } from '../LetterSelect';
import { QuestionSection } from '../QuestionSection';
import { useTranslations } from 'next-intl';

type Props = {
  questions: Database['mock_test']['Tables']['listening_match_image_audio']['Row'][];
  handleListeningMatchImageAudioAnswer: HandleListeningMatchImageAudioAnswer;
};

export function ListeningMatchImageAudio({
  questions,
  handleListeningMatchImageAudioAnswer,
}: Props) {
  const t = useTranslations('Test');

  return (
    <QuestionSection
      title={t('Titles.listeningMatchImageAudio')}
      description={t('Descriptions.listeningMatchImageAudio')}
    >
      <div className='flex flex-col gap-12'>
        {questions.map((question, index) => (
          <article key={question.id}>
            <picture className='block relative w-full h-32 mb-2'>
              <source src={question.img} width={'100%'} />
              <Image
                src={question.imgFallback}
                alt={t('ImageAltMissing')}
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                fill
                className='object-contain'
              />
            </picture>
            <div className='flex flex-wrap gap-6 md:gap-12 justify-center items-center'>
              <Audio
                audioUrl={question.audio}
                caption={`${question.questionNumber}.-`}
              />
              <LetterSelect
                questionNumber={question.questionNumber}
                options={LETTERS_ABC}
                onValueChange={(value) =>
                  handleListeningMatchImageAudioAnswer(
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
