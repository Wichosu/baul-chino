import React from 'react';
import { cookies } from 'next/headers';
import { createClient } from '@/src/app/utils/supabase/server';
import { TestClient } from './TestClient';
import { Test, TestTranslations } from './Test.types';
import { getTranslations } from 'next-intl/server';

type Props = {
  testId: string;
};

export async function TestFetch({ testId }: Props) {
  //translations
  const t = await getTranslations('Test');
  const translations: TestTranslations = {
    check: t('Icons.Check'),
    x: t('Icons.X'),
    previous: t('Previous'),
    next: t('Next'),
    showAnswers: t('ShowAnswers'),
  };

  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  //Getting the data from my postgresql db :D
  const { data: questionsListeningTrueFalse } = await supabase
    .schema('mock_test')
    .from('listening_true_false')
    .select('*')
    .eq('mockTest', testId);

  const { data: questionsListeningMatchImageAudio } = await supabase
    .schema('mock_test')
    .from('listening_match_image_audio')
    .select('*')
    .eq('mockTest', testId);

  if (!questionsListeningTrueFalse) {
    return (
      <p>
        No questions found for true or false listening found. Please refresh or
        report this
      </p>
    );
  }

  if (!questionsListeningMatchImageAudio) {
    return (
      <p>
        No questions found for match image audio found. Please refresh or report
        this
      </p>
    );
  }

  const test: Test = {
    level: 'hsk1',
    flowOrder: ['listeningTrueFalse'],
    listeningTrueFalse: questionsListeningTrueFalse,
    listeningMatchImageAudio: questionsListeningMatchImageAudio,
  };

  return (
    <>
      <TestClient test={test} translations={translations} />
    </>
  );
}
