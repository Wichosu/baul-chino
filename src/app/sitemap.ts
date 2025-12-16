import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      alternates: {
        languages: {
          en: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
          es: `${process.env.NEXT_PUBLIC_BASE_URL}/es`,
        },
      },
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/mazos-anki`,
      alternates: {
        languages: {
          en: `${process.env.NEXT_PUBLIC_BASE_URL}/mazos-anki`,
          es: `${process.env.NEXT_PUBLIC_BASE_URL}/es/mazos-anki`,
        },
      },
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/libros-hsk`,
      alternates: {
        languages: {
          en: `${process.env.NEXT_PUBLIC_BASE_URL}/libros-hsk`,
          es: `${process.env.NEXT_PUBLIC_BASE_URL}/es/libros-hsk`,
        },
      },
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/hsk-audios`,
      alternates: {
        languages: {
          en: `${process.env.NEXT_PUBLIC_BASE_URL}/hsk-audios`,
          es: `${process.env.NEXT_PUBLIC_BASE_URL}/es/hsk-audios`,
        },
      },
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/hsk-mock-test`,
      alternates: {
        languages: {
          en: `${process.env.NEXT_PUBLIC_BASE_URL}/hsk-mock-test`,
          es: `${process.env.NEXT_PUBLIC_BASE_URL}/es/hsk-mock-test`,
        },
      },
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/canales`,
      alternates: {
        languages: {
          en: `${process.env.NEXT_PUBLIC_BASE_URL}/canales`,
          es: `${process.env.NEXT_PUBLIC_BASE_URL}/es/canales`,
        },
      },
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/hanzi`,
      alternates: {
        languages: {
          en: `${process.env.NEXT_PUBLIC_BASE_URL}/hanzi`,
          es: `${process.env.NEXT_PUBLIC_BASE_URL}/es/hanzi`,
        },
      },
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/plantillas`,
      alternates: {
        languages: {
          en: `${process.env.NEXT_PUBLIC_BASE_URL}/plantillas`,
          es: `${process.env.NEXT_PUBLIC_BASE_URL}/es/plantillas`,
        },
      },
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/plantillas/generador`,
      alternates: {
        languages: {
          en: `${process.env.NEXT_PUBLIC_BASE_URL}/plantillas/generador`,
          es: `${process.env.NEXT_PUBLIC_BASE_URL}/es/plantillas/generador`,
        },
      },
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/hsk-audios-download`,
      alternates: {
        languages: {
          en: `${process.env.NEXT_PUBLIC_BASE_URL}/hsk-audios-download`,
          es: `${process.env.NEXT_PUBLIC_BASE_URL}/es/hsk-audios-download`,
        },
      },
    },
  ];
}
