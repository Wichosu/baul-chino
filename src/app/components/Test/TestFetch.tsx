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
    Titles: {
      listeningTrueFalse: t('Titles.listeningTrueFalse'),
      listeningMatchImageAudio: t('Titles.listeningMatchImageAudio'),
      listeningMatchImageAudioSingleImage: t(
        'Titles.listeningMatchImageAudioSingleImage'
      ),
      listeningSelectPhrase: t('Titles.listeningSelectPhrase'),
    },
    Descriptions: {
      listeningTrueFalse: t('Descriptions.listeningTrueFalse'),
      listeningMatchImageAudio: t('Descriptions.listeningMatchImageAudio'),
      listeningMatchImageAudioSingleImage: t(
        'Descriptions.listeningMatchImageAudioSingleImage'
      ),
      listeningSelectPhrase: t('Descriptions.listeningSelectPhrase'),
    },
    Answers: {
      score: t('Answers.Score'),
      test: t('Answers.Test'),
      your: t('Answers.Your'),
      listeningTrueFalse: t('Answers.listeningTrueFalse'),
      listeningMatchImageAudio: t('Answers.listeningMatchImageAudio'),
      listeningMatchImageAudioSingleImage: t(
        'Answers.listeningMatchImageAudioSingleImage'
      ),
      listeningSelectPhrase: t('Answers.listeningSelectPhrase'),
    },
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

  const { data: questionsListeningMatchImageAudioSingleImage } = await supabase
    .schema('mock_test')
    .from('listening_match_image_audio_single_image')
    .select(
      `
      *,
      image (image, imageFallback)
      `
    )
    .eq('mockTest', testId);

  const { data: questionsListeningSelectPhrase } = await supabase
    .schema('mock_test')
    .from('listening_select_phrase')
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

  if (!questionsListeningMatchImageAudioSingleImage) {
    return (
      <p>
        No questions found for match image audio single image found. Please
        refresh or report this
      </p>
    );
  }

  if (!questionsListeningSelectPhrase) {
    return (
      <p>
        No questions found for select phrase found. Please refresh or report
        this
      </p>
    );
  }

  const test: Test = {
    level: 'hsk1',
    flowOrder: [
      'listeningTrueFalse',
      'listeningMatchImageAudio',
      'listeningMatchImageAudioSingleImage',
      'listeningSelectPhrase',
    ],
    listeningTrueFalse: questionsListeningTrueFalse.sort(
      (a, b) => parseInt(a.questionNumber) - parseInt(b.questionNumber)
    ),
    listeningMatchImageAudio: questionsListeningMatchImageAudio.sort(
      (a, b) => parseInt(a.questionNumber) - parseInt(b.questionNumber)
    ),
    listeningMatchImageAudioSingleImage:
      questionsListeningMatchImageAudioSingleImage.sort(
        (a, b) => parseInt(a.questionNumber) - parseInt(b.questionNumber)
      ),
    listeningSelectPhrase: questionsListeningSelectPhrase.sort(
      (a, b) => parseInt(a.questionNumber) - parseInt(b.questionNumber)
    ),
  };

  return (
    <>
      <TestClient test={test} translations={translations} />
    </>
  );
}
