export type Book = {
  title: string;
  lessons: Lesson[];
};

type Lesson = {
  title: string;
  audioTracks: AudioTrack[];
};

type AudioTrack = {
  title: string;
  filename: string;
  url: string;
};

export function createBook(title: string, lessons: Lesson[]): Book {
  return {
    title,
    lessons,
  };
}

export function createLesson(title: string, audioTracks: AudioTrack[]): Lesson {
  return {
    title,
    audioTracks,
  };
}

export function createAudioTrack(
  title: string,
  filename: string,
  url: string
): AudioTrack {
  return {
    title,
    filename,
    url,
  };
}
