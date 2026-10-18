import { MetadataRoute } from 'next';

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ?? 'https://www.baulchino.com';

const ROUTES = [
  '/',
  '/mazos-anki',
  '/libros-hsk',
  '/hsk-audios',
  '/hsk-mock-test',
  '/canales',
  '/hanzi',
  '/plantillas',
  '/plantillas/generador',
  '/hsk-audios-download',
  '/support',
  '/about',
  '/roadmap',
  '/new-hsk-books-2026',
  '/new-hsk-audios-2026',
  '/new-hsk-mock-test-2026',
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return ROUTES.map((route) => ({
    url: `${BASE_URL}${route}`,
    alternates: {
      languages: {
        en: `${BASE_URL}${route}`,
        es: `${BASE_URL}/es${route}`,
      },
    },
  }));
}
