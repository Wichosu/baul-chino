import React from 'react';
import { Database } from '@/src/app/types/supabase';
import { TestTranslations } from '@/src/app/components/Test/Test.types';
import Image from 'next/image';
import Audio from '@/src/app/components/Audio/Audio';

type Props = {
  questions: Database['mock_test']['Tables']['listening_match_image_audio']['Row'][];
  translations: TestTranslations;
};

export function ListeningMatchImageAudio({ questions, translations }: Props) {
  return (
    <section>
      {questions.map((question) => (
        <article key={question.id}>
          <picture>
            <source src={question.img} />
            <Image
              src={question.imgFallback}
              alt={
                'If I have not place an alt tag here please report this. I do plan on supporting alt tags for screen reader users'
              }
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              fill
              className='object-contain'
            />
          </picture>
          <Audio
            audioUrl={question.audio}
            caption={`${question.questionNumber}.-`}
          >
            <source src={question.audio} />
          </Audio>
        </article>
      ))}
    </section>
  );
}
