import {
  Book,
  createBook,
  createLesson,
  createAudioTrack,
} from './hskaudio.types';

export const hsk3workbook: Book = createBook('HSK 3 WORKBOOK', [
  createLesson('HSK 3 WORKBOOK - Lesson 01', [
    createAudioTrack(
      'Lesson 01-01',
      'hsk3-workbook-01',
      'pmZgVpOF4SrlXnfvVKi34Y3w0Qra2OzjPehCtZigGfvKBIAD'
    ),
    createAudioTrack('Lesson 01', 'hsk3-workbook-01', ''),
  ]),
  createLesson('HSK 3 WORKBOOK - Lesson 02', [
    createAudioTrack(
      'Lesson 02',
      'hsk3-workbook-02',
      'pmZgVpOF4SrlzGj3okKkMPXs0DgnORyhbHNL8ufCZl2eoQGt'
    ),
  ]),
  createLesson('HSK 3 WORKBOOK - Lesson 03', [
    createAudioTrack(
      'Lesson 03',
      'hsk3-workbook-03',
      'pmZgVpOF4SrlYAwR5K8BJ5gcweDIWO9GXKNz3iq7vyroRQa0'
    ),
  ]),
  createLesson('HSK 3 WORKBOOK - Lesson 04', [
    createAudioTrack(
      'Lesson 04',
      'hsk3-workbook-04',
      'pmZgVpOF4SrlAZSokCzD68JTVorcF4ZRUl9xpeqYPQbj320X'
    ),
  ]),
]);
