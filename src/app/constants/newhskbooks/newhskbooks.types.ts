export type Book = {
  title: string;
  id: string;
  image: string;
  fallbackImage: string;
  alt: string;
  downloadLinks: {
    name: string;
    url: string;
  }[];
};
