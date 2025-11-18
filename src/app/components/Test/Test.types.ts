import { Database } from '@/src/app/types/supabase';

export type QuestionType = 'listeningTrueFalse';

export type Test = {
  flowOrder: QuestionType[];
  listeningTrueFalse: Database['mock_test']['Tables']['listening_true_false']['Row'][];
};

export type ClientAnswers = {
  listeningTrueFalse: [];
};

export type Translations = {
  check: string;
  x: string;
};

/**SECTION ANSWER TYPES */
export type HandleListeningTrueFalseAnswer = (
  answer: boolean,
  index: number
) => void;
