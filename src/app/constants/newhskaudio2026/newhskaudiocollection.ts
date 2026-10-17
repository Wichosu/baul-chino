import { Book } from './newhskaudio.types';
import { newhsk1textbook } from './newhskaudio.hsk1textbook';
import { newhsk1workbook } from './newhskaudio.hsk1workbook';
import { newhsk2textbook } from './newhskaudio.hsk2textbook';
import { newhsk2workbook } from './newhskaudio.hsk2workbook';
import { newhsk3textbook } from './newhskaudio.hsk3textbook';
import { newhsk3workbook } from './newhskaudio.hsk3workbook';
import { newhsk4atextbook } from './newhskaudio.hsk4atextbook';

export const Books: Book[] = [
  newhsk1textbook,
  newhsk1workbook,
  newhsk2textbook,
  newhsk2workbook,
  newhsk3textbook,
  newhsk3workbook,
  newhsk4atextbook,
];
