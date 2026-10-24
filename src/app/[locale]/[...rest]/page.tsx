import { notFound } from 'next/navigation';

//Any route under a locale that no other page matches lands here, which
//throws notFound() so [locale]/not-found.tsx renders the localized 404.
export default function CatchAll() {
  notFound();
}
