import React from 'react';
import { createClient } from '@/src/app/utils/supabase/server';
import { cookies } from 'next/headers';
import { MockTestCard } from './MockTestCard';

export async function MockTestCardFetch() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data: tests } = await supabase
    .schema('mock_test')
    .from('mock_test')
    .select(
      `
      id,
      name,
      hsk_level ( level )
      `
    );

  const hsk1Tests = tests?.filter((test) => test.hsk_level?.level === 'HSK 1');

  return (
    <>
      <MockTestCard title='HSK 1' tests={hsk1Tests} />
    </>
  );
}
