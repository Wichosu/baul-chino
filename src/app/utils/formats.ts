type AllowedFormats = 'mm:ss';

export function formatSeconds(seconds: number, format: AllowedFormats): string {
  switch (format) {
    case 'mm:ss':
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = Math.floor(seconds % 60);
      const formatedString = `${minutes}:${
        remainingSeconds < 10 ? '0' : ''
      }${remainingSeconds}`;

      return formatedString;
      break;
    default:
      throw new Error('No allowed format match with the format given');
  }
}
