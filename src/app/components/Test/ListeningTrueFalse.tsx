import React from 'react';
import { createClient } from '@/src/app/utils/supabase/server';
import { cookies } from 'next/headers';
import Image from 'next/image';
import Audio from '@/src/app/components/Audio/Audio';
import { Button } from '../Button';
import { X, Check } from 'lucide-react';

type Props = {
  test: string;
};

export async function ListeningTrueFalse({ test }: Props) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data: questions } = await supabase
    .schema('mock_test')
    .from('listening_true_false')
    .select('*')
    .eq('mockTest', test);

  console.log(questions);

  return (
    <section>
      {questions?.map((question) => (
        <article
          key={question.id}
          className='flex gap-12 items-center justify-center'
        >
          <picture className='relative w-32 h-32'>
            <source srcSet={question.image} width={'100%'} />
            <Image
              src={question.imgFallback}
              alt={
                question.alt ??
                'Error fetching image alt text please refresh the page'
              }
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              fill
              className='object-contain'
            />
          </picture>
          <Audio audioUrl={question.audio} caption={question.questionNumber}>
            <source src={question.audio} />
          </Audio>
          <div>
            <Button type='lime'>
              <Check />
            </Button>
            <Button type='lightred'>
              <X />
            </Button>
          </div>
        </article>
      ))}
    </section>
  );
}
