import { Book } from './hskaudio.types';
import { hsk1textbook } from './hskaudio.hsk1textbook';
import { hsk1workbook } from './hskaudio.hsk1workbook';
import { hsk2textbook } from './hskaudio.hsk2textbook';
import { hsk2workbook } from './hskaudio.hsk2workbook';
import { hsk3textbook } from './hskaudio.hsk3textbook';
import { hsk3workbook } from './hskaudio.hsk3workbook';
import { hsk4Atextbook } from './hskaudio.hsk4Atextbook';

export const Books: Book[] = [
  hsk1textbook,
  hsk1workbook,
  hsk2textbook,
  hsk2workbook,
  hsk3textbook,
  hsk3workbook,
  hsk4Atextbook,
  // createBook('HSK 2 TEXTBOOK', [
  //   createLesson('Unit 01', [
  //     createAudioTrack('Lesson 02-01', 'hsk1-workbook-0201.mp3', ''),
  //     createAudioTrack('Lesson 01-01', 'hsk1-textbook-0101.mp3', ''),
  //     createAudioTrack('Lesson 01-02', 'hsk1-textbook-0101.mp3', ''),
  //     createAudioTrack('Lesson 01-03', 'hsk1-textbook-0101.mp3', ''),
  //     createAudioTrack('Lesson 01-03', 'hsk1-textbook-0101.mp3', ''),
  //     createAudioTrack('Lesson 01-03', 'hsk1-textbook-0101.mp3', ''),
  //   ]),
  //   createLesson('Unit 02', [
  //     createAudioTrack('Lesson 01-03', 'hsk1-textbook-0101.mp3', ''),
  //     createAudioTrack('Lesson 01-03', 'hsk1-textbook-0101.mp3', ''),
  //     createAudioTrack('Lesson 01-03', 'hsk1-textbook-0101.mp3', ''),
  //     createAudioTrack('Lesson 01-03', 'hsk1-textbook-0101.mp3', ''),
  //   ]),
  //   createLesson('Unit 03', [
  //     createAudioTrack('Lesson 01-03', 'hsk1-textbook-0101.mp3', ''),
  //     createAudioTrack('Lesson 01-03', 'hsk1-textbook-0101.mp3', ''),
  //     createAudioTrack('Lesson 01-03', 'hsk1-textbook-0101.mp3', ''),
  //     createAudioTrack('Lesson 01-03', 'hsk1-textbook-0101.mp3', ''),
  //   ]),
  //   createLesson('Unit 04', [
  //     createAudioTrack('Lesson 01-03', 'hsk1-textbook-0101.mp3', ''),
  //     createAudioTrack('Lesson 01-03', 'hsk1-textbook-0101.mp3', ''),
  //     createAudioTrack('Lesson 01-03', 'hsk1-textbook-0101.mp3', ''),
  //     createAudioTrack('Lesson 01-03', 'hsk1-textbook-0101.mp3', ''),
  //     createAudioTrack('Lesson 01-03', 'hsk1-textbook-0101.mp3', ''),
  //     createAudioTrack('Lesson 01-03', 'hsk1-textbook-0101.mp3', ''),
  //   ]),
  // ]),
];
