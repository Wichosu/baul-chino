type Book = {
  title: string;
  units: Unit[];
};

type Unit = {
  title: string;
  audioTracks: AudioTrack[];
};

type AudioTrack = {
  title: string;
  url: string;
};

function createBook(title: string, units: Unit[]): Book {
  return {
    title,
    units,
  };
}

function createUnit(title: string, audioTracks: AudioTrack[]): Unit {
  return {
    title,
    audioTracks,
  };
}

function createAudioTrack(title: string, filename: string) {
  const url = `/${filename}`;

  return {
    title,
    url,
  };
}

export const Books: Book[] = [
  createBook('HSK 1 TEXTBOOK', [
    createUnit('Unit 01', [
      createAudioTrack('Lesson 01-01', 'hsk1-0101.mp3'),
      createAudioTrack('Lesson 01-02', 'hsk1-0101.mp3'),
      createAudioTrack('Lesson 01-03', 'hsk1-0101.mp3'),
      createAudioTrack('Lesson 01-03', 'hsk1-0101.mp3'),
      createAudioTrack('Lesson 01-03', 'hsk1-0101.mp3'),
      createAudioTrack('Lesson 01-03', 'hsk1-0101.mp3'),
      createAudioTrack('Lesson 01-03', 'hsk1-0101.mp3'),
    ]),
    createUnit('Unit 02', [
      createAudioTrack('Lesson 01-03', 'hsk1-0101.mp3'),
      createAudioTrack('Lesson 01-03', 'hsk1-0101.mp3'),
      createAudioTrack('Lesson 01-03', 'hsk1-0101.mp3'),
      createAudioTrack('Lesson 01-03', 'hsk1-0101.mp3'),
    ]),
    createUnit('Unit 03', [
      createAudioTrack('Lesson 01-03', 'hsk1-0101.mp3'),
      createAudioTrack('Lesson 01-03', 'hsk1-0101.mp3'),
      createAudioTrack('Lesson 01-03', 'hsk1-0101.mp3'),
      createAudioTrack('Lesson 01-03', 'hsk1-0101.mp3'),
    ]),
    createUnit('Unit 04', [
      createAudioTrack('Lesson 01-03', 'hsk1-0101.mp3'),
      createAudioTrack('Lesson 01-03', 'hsk1-0101.mp3'),
      createAudioTrack('Lesson 01-03', 'hsk1-0101.mp3'),
      createAudioTrack('Lesson 01-03', 'hsk1-0101.mp3'),
      createAudioTrack('Lesson 01-03', 'hsk1-0101.mp3'),
      createAudioTrack('Lesson 01-03', 'hsk1-0101.mp3'),
      createAudioTrack('Lesson 01-03', 'hsk1-0101.mp3'),
      createAudioTrack('Lesson 01-03', 'hsk1-0101.mp3'),
      createAudioTrack('Lesson 01-03', 'hsk1-0101.mp3'),
      createAudioTrack('Lesson 01-03', 'hsk1-0101.mp3'),
    ]),
  ]),
  createBook('HSK 2 TEXTBOOK', [
    createUnit('Unit 01', [
      createAudioTrack('Lesson 01-01', 'hsk1-0101.mp3'),
      createAudioTrack('Lesson 01-02', 'hsk1-0101.mp3'),
      createAudioTrack('Lesson 01-03', 'hsk1-0101.mp3'),
      createAudioTrack('Lesson 01-03', 'hsk1-0101.mp3'),
      createAudioTrack('Lesson 01-03', 'hsk1-0101.mp3'),
    ]),
    createUnit('Unit 02', [
      createAudioTrack('Lesson 01-03', 'hsk1-0101.mp3'),
      createAudioTrack('Lesson 01-03', 'hsk1-0101.mp3'),
      createAudioTrack('Lesson 01-03', 'hsk1-0101.mp3'),
      createAudioTrack('Lesson 01-03', 'hsk1-0101.mp3'),
    ]),
    createUnit('Unit 03', [
      createAudioTrack('Lesson 01-03', 'hsk1-0101.mp3'),
      createAudioTrack('Lesson 01-03', 'hsk1-0101.mp3'),
      createAudioTrack('Lesson 01-03', 'hsk1-0101.mp3'),
      createAudioTrack('Lesson 01-03', 'hsk1-0101.mp3'),
    ]),
    createUnit('Unit 04', [
      createAudioTrack('Lesson 01-03', 'hsk1-0101.mp3'),
      createAudioTrack('Lesson 01-03', 'hsk1-0101.mp3'),
      createAudioTrack('Lesson 01-03', 'hsk1-0101.mp3'),
      createAudioTrack('Lesson 01-03', 'hsk1-0101.mp3'),
      createAudioTrack('Lesson 01-03', 'hsk1-0101.mp3'),
      createAudioTrack('Lesson 01-03', 'hsk1-0101.mp3'),
    ]),
  ]),
];
