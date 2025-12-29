import React from 'react';
import { Card } from '@/src/app/components/Card';

type Props = {
  title: string;
  status: 'pending' | 'in-progress' | 'completed';
  children: React.ReactNode;
};

export function RoadmapItem({ title, status, children }: Props) {
  return (
    <Card margin='none' elevation='2'>
      <li className='text-lg max-w-xl'>
        <strong className='block text-2xl font-medium my-1'>{title}</strong>
        {children}
        <p className='mt-1'>
          <strong className='font-medium'>Current Status: </strong>
          {status === 'pending' && (
            <span className='text-red-600 font-medium'>Pending</span>
          )}
          {status === 'in-progress' && (
            <span className='text-yellow-600 font-medium'>In Progress</span>
          )}
          {status === 'completed' && (
            <span className='text-green-600 font-medium'>Completed</span>
          )}
        </p>
      </li>
    </Card>
  );
}
