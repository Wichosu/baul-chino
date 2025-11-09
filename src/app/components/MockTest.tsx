import React from 'react';
import { createClient } from '../utils/supabase/server';
import { cookies } from 'next/headers';
import Card from './Card';
import { Button } from './Button';

export default async function MockTest() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data: tests } = await supabase
    .schema('mock_test')
    .from('mock_test')
    .select();

  console.log(tests);

  return (
    <>
      {tests?.map((test, index) => (
        <Card key={test.id} as='article' padding='3'>
          <h3 className='text-2xl font-medium text-center'>HSK {index + 1}</h3>
          <div className='flex flex-col'>
            <Button
              key={test.id}
              type='yellow'
              as='link'
              href={test.id}
              target='_self'
            >
              {test.name}
            </Button>
          </div>
        </Card>
      ))}
    </>
  );
}
