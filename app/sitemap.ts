import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/`
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/mazos-anki`
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/libros-hsk`
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/canales`
    }
  ]
}