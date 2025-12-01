import React from 'react';
import { createStaticClient } from '@/src/app/utils/supabase/server';
import { MockTestCard } from './MockTestCard';

export async function MockTestCardFetch() {
  const supabase = createStaticClient();

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
