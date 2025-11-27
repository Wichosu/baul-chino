import { Database } from '@/src/app/types/supabase';

export type QuestionType = 'listeningTrueFalse' | 'listeningMatchImageAudio';

export type Test = {
  level: 'hsk1';
  flowOrder: QuestionType[];
  listeningTrueFalse: Database['mock_test']['Tables']['listening_true_false']['Row'][];
  listeningMatchImageAudio: Database['mock_test']['Tables']['listening_match_image_audio']['Row'][];
};

export type ClientAnswers = {
  listeningTrueFalse: [];
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
