import React from 'react';
import { Database } from '@/src/app/types/supabase';
import Image from 'next/image';
import Audio from '@/src/app/components/Audio/Audio';
import {
  SelectRoot,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from '@/src/app/components/Select';

type Props = {
  questions: Database['mock_test']['Tables']['listening_select_phrase']['Row'][];
};

type SelectOptions = Extract<
  Database['public']['Enums']['letter_range'],
  'A' | 'B' | 'C'
>;

const SELECTOPTIONS: SelectOptions[] = ['A', 'B', 'C'];

export function ListeningSelectPhrase({ questions }: Props) {
  return (
    <section className='flex flex-col gap-16 mb-8'>
      {questions.map((question) => (
        <article key={question.id}>
          <picture className='block relative w-full h-32 mb-2'>
            <source src={question.image} width={'100%'} />
            <Image
              src={question.imageFallback}
              alt={
                'If I have not place an alt tag here please report this. I do plan on supporting alt tags for screen reader users'
              }
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              fill
              className='object-contain'
            />
          </picture>
          <Audio audioUrl={question.audio} caption={question.questionNumber}>
            <source src={question.audio} />
          </Audio>
          <SelectRoot>
            <SelectTrigger
              ariaLabel={`options for question ${question.questionNumber}`}
            >
              Choose a letter
            </SelectTrigger>
            <SelectContent>
              {SELECTOPTIONS.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </SelectRoot>
        </article>
      ))}
    </section>
  );
}
