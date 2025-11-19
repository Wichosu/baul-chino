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

  const { data: questionsListeningTrueFalse } = await supabase
    .schema('mock_test')
    .from('listening_true_false')
    .select('*')
    .eq('mockTest', testId);

  if (!questionsListeningTrueFalse) {
    return <p>No questions found. Please refresh or report this</p>;
  }

  const test: Test = {
    flowOrder: ['listeningTrueFalse'],
    listeningTrueFalse: questionsListeningTrueFalse,
  };

  return (
    <>
      <TestClient test={test} translations={translations} />
    </>
  );
}
