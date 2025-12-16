export type HskAudioDownload = {
  level: string;
  files: HskAudioDownloadFile[];
};

type HskAudioDownloadFile = {
  title: string;
  url: string;
};

export function createHskAudioDownload(
  level: string,
  files: HskAudioDownloadFile[]
): HskAudioDownload {
  return {
    level,
    files,
  };
}

export function createHskAudioDownloadFile(
  title: string,
  url: string
): HskAudioDownloadFile {
  return {
    title,
    url,
  };
}
