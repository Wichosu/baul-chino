import { Database } from '@/src/app/types/supabase';

export type QuestionType =
  | 'listeningTrueFalse'
  | 'listeningMatchImageAudio'
  | 'listeningMatchImageAudioSingleImage'
  | 'listeningSelectPhrase';

export type Test = {
  level: 'hsk1';
  flowOrder: QuestionType[];
  listeningTrueFalse: Database['mock_test']['Tables']['listening_true_false']['Row'][];
  listeningMatchImageAudio: Database['mock_test']['Tables']['listening_match_image_audio']['Row'][];
  listeningMatchImageAudioSingleImage: (Omit<
    Database['mock_test']['Tables']['listening_match_image_audio_single_image']['Row'],
    'image'
  > & {
    image: { image: string | null; imageFallback: string | null } | null;
  })[];
  listeningSelectPhrase: Database['mock_test']['Tables']['listening_select_phrase']['Row'][];
};

export type TestTranslations = {
  check: string;
  x: string;
  previous: string;
  next: string;
  showAnswers: string;
};

/**SECTION ANSWER TYPES */
export type HandleListeningTrueFalseAnswer = (
  answer: boolean,
  index: number
) => void;

export type HandleListeningMatchImageAudioAnswer = (
  answer: string,
  index: number,
  questionNumber: string
) => void;

export type HandleListeningMatchImageAudioSingleImageAnswer = (
  answer: string,
  index: number,
  questionNumber: string
) => void;

export type HandleListeningSelectPhraseAnswer = (
  answer: Database['public']['Enums']['letter_range'],
  index: number,
  questionNumber: string
) => void;
