import {
  HskAudioDownload,
  createHskAudioDownload,
  createHskAudioDownloadFile,
} from './hskaudiodownload.types';

export const HskAudioDownloadBundles: HskAudioDownload[] = [
  createHskAudioDownload('HSK 1', [
    createHskAudioDownloadFile(
      'HSK 1 TEXTBOOK',
      'https://cdn.baulchino.com/hsk-books-audios/hsk1textbookaudios.zip'
    ),
    createHskAudioDownloadFile(
      'HSK 1 WORKBOOK',
      'https://cdn.baulchino.com/hsk-books-audios/hsk1workbookaudios.zip'
    ),
  ]),
  createHskAudioDownload('HSK 2', [
    createHskAudioDownloadFile(
      'HSK 2 TEXTBOOK',
      'https://cdn.baulchino.com/hsk-books-audios/hsk2textbookaudios.zip'
    ),
    createHskAudioDownloadFile(
      'HSK 2 WORKBOOK',
      'https://cdn.baulchino.com/hsk-books-audios/hsk2workbookaudios.zip'
    ),
  ]),
  createHskAudioDownload('HSK 3', [
    createHskAudioDownloadFile(
      'HSK 3 TEXTBOOK',
      'https://cdn.baulchino.com/hsk-books-audios/hsk3textbookaudios.zip'
    ),
    createHskAudioDownloadFile(
      'HSK 3 WORKBOOK',
      'https://cdn.baulchino.com/hsk-books-audios/hsk3workbookaudios.zip'
    ),
  ]),
  createHskAudioDownload('HSK 4', [
    createHskAudioDownloadFile(
      'HSK 4上 TEXTBOOK',
      'https://cdn.baulchino.com/hsk-books-audios/hsk4Atextbookaudios.zip'
    ),
    createHskAudioDownloadFile(
      'HSK 4上 WORKBOOK',
      'https://cdn.baulchino.com/hsk-books-audios/hsk4Aworkbookaudios.zip'
    ),
    createHskAudioDownloadFile(
      'HSK 4下 TEXTBOOK',
      'https://cdn.baulchino.com/hsk-books-audios/hsk4Btextbookaudios.zip'
    ),
    createHskAudioDownloadFile(
      'HSK 4下 WORKBOOK',
      'https://cdn.baulchino.com/hsk-books-audios/hsk4Bworkbookaudios.zip'
    ),
  ]),
  createHskAudioDownload('HSK 5', [
    createHskAudioDownloadFile(
      'HSK 5上 TEXTBOOK',
      'https://cdn.baulchino.com/hsk-books-audios/hsk5Atextbookaudios.zip'
    ),
    createHskAudioDownloadFile(
      'HSK 5上 WORKBOOK',
      'https://cdn.baulchino.com/hsk-books-audios/hsk5Aworkbookaudios.zip'
    ),
    createHskAudioDownloadFile(
      'HSK 5下 TEXTBOOK',
      'https://cdn.baulchino.com/hsk-books-audios/hsk5Btextbookaudios.zip'
    ),
    createHskAudioDownloadFile(
      'HSK 5下 WORKBOOK',
      'https://cdn.baulchino.com/hsk-books-audios/hsk5Bworkbookaudios.zip'
    ),
  ]),
  createHskAudioDownload('HSK 6', [
    createHskAudioDownloadFile(
      'HSK 6上 TEXTBOOK',
      'https://cdn.baulchino.com/hsk-books-audios/hsk6Atextbookaudios.zip'
    ),
    createHskAudioDownloadFile(
      'HSK 6上 WORKBOOK',
      'https://cdn.baulchino.com/hsk-books-audios/hsk6Aworkbookaudios.zip'
    ),
    createHskAudioDownloadFile(
      'HSK 6下 TEXTBOOK',
      'https://cdn.baulchino.com/hsk-books-audios/hsk6Btextbookaudios.zip'
    ),
    createHskAudioDownloadFile(
      'HSK 6下 WORKBOOK',
      'https://cdn.baulchino.com/hsk-books-audios/hsk6Bworkbookaudios.zip'
    ),
  ]),
];
