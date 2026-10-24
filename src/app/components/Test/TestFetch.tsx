import React from 'react';
import { createClient } from '@/src/app/utils/supabase/server';
import { TestClient } from './TestClient';
import { Test } from './Test.types';
import { EmptyState } from '@/src/app/components/EmptyState/EmptyState';
import { getTranslations } from 'next-intl/server';

type Props = {
  testId: string;
};

export async function TestFetch({ testId }: Props) {
  const supabase = createClient();
  const t = await getTranslations('Test');

  //Getting the data from my postgresql db :D
  const [
    { data: questionsListeningTrueFalse },
    { data: questionsListeningMatchImageAudio },
    { data: questionsListeningMatchImageAudioSingleImage },
    { data: questionsListeningSelectPhrase },
    { data: questionsReadingTrueFalse },
    { data: questionsReadingMatchImage },
  ] = await Promise.all([
    supabase
      .schema('mock_test')
      .from('listening_true_false')
      .select('*')
      .eq('mockTest', testId),
    supabase
      .schema('mock_test')
      .from('listening_match_image_audio')
      .select('*')
      .eq('mockTest', testId),
    supabase
      .schema('mock_test')
      .from('listening_match_image_audio_single_image')
      .select(
        `
      *,
      image (image, imageFallback)
      `
      )
      .eq('mockTest', testId),
    supabase
      .schema('mock_test')
      .from('listening_select_phrase')
      .select('*')
      .eq('mockTest', testId),
    supabase
      .schema('mock_test')
      .from('reading_true_false')
      .select('*')
      .eq('mockTest', testId),
    supabase
      .schema('mock_test')
      .from('reading_match_image')
      .select(
        `
      *,
      image (image, imageFallback, alt)
      `
      )
      .eq('mockTest', testId),
  ]);

  //supabase returns data: null when a query fails (vs [] when it succeeds
  //with no rows), so a null here means the fetch itself broke
  if (
    !questionsListeningTrueFalse ||
    !questionsListeningMatchImageAudio ||
    !questionsListeningMatchImageAudioSingleImage ||
    !questionsListeningSelectPhrase ||
    !questionsReadingTrueFalse ||
    !questionsReadingMatchImage
  ) {
    return (
      <EmptyState
        title={t('FetchErrorTitle')}
        message={t('FetchErrorMessage')}
      />
    );
  }

  const test: Test = {
    level: 'hsk1',
    flowOrder: [
      'listeningTrueFalse',
      'listeningMatchImageAudio',
      'listeningMatchImageAudioSingleImage',
      'listeningSelectPhrase',
      'readingTrueFalse',
      'readingMatchImage',
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
    readingTrueFalse: questionsReadingTrueFalse.sort(
      (a, b) => parseInt(a.questionNumber) - parseInt(b.questionNumber)
    ),
    readingMatchImage: questionsReadingMatchImage
      .sort((a, b) => parseInt(a.questionNumber) - parseInt(b.questionNumber))
      .map((question) => ({
        ...question,
        image: question.image
          ? {
              image: question.image.image,
              imageFallback: question.image.imageFallback,
              //alt is a jsonb column, so only a plain string reaches the img
              alt:
                typeof question.image.alt === 'string'
                  ? question.image.alt
                  : t('ImageAltMissing'),
            }
          : {
              image: 'Error fetching image please refresh the page',
              imageFallback: 'Error fetching image please refresh the page',
              alt: t('ImageAltFallback'),
            },
      })),
  };

  return (
    <>
      <TestClient test={test} />
    </>
  );
}
