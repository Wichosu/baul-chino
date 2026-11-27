import React from 'react';
import { Card } from '@/src/app/components/Card';
import { useTranslations } from 'next-intl';

type Props = {
  title: string;
  status: 'pending' | 'in-progress' | 'completed';
  children: React.ReactNode;
};

export function RoadmapItem({ title, status, children }: Props) {
  const t = useTranslations('Components.RoadmapItem');

  return (
    <Card margin='none' elevation='2'>
      <li className='text-lg max-w-xl'>
        <strong className='block text-2xl font-medium my-1'>{title}</strong>
        {children}
        <p className='mt-1'>
          <strong className='font-medium'>{t('CurrentStatus')} </strong>
          {status === 'pending' && (
            <span className='text-ink-3 font-medium'>{t('Pending')}</span>
          )}
          {status === 'in-progress' && (
            <span className='text-brass-deep font-medium'>
              {t('InProgress')}
            </span>
          )}
          {status === 'completed' && (
            <span className='text-success font-medium'>{t('Completed')}</span>
          )}
        </p>
      </li>
    </Card>
  );
}
