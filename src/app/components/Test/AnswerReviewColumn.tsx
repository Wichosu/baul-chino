import React from 'react';
import { Check, X } from 'lucide-react';
import { QuestionType } from './Test.types';

export type ReviewItem = {
  key: string;
  label: React.ReactNode;
  answer: boolean | string | undefined;
};

export type ReviewSection = {
  type: QuestionType;
  heading: string;
  /** 'boolean' sections render check/x icons, 'text' sections render the answer value */
  kind: 'boolean' | 'text';
  items: ReviewItem[];
};

type Props = {
  title: string;
  sections: ReviewSection[];
};

export function AnswerReviewColumn({ title, sections }: Props) {
  return (
    <div>
      <h2 className='text-3xl font-medium'>{title}</h2>
      <div>
        {sections.map((section) => (
          <div key={section.type}>
            <h3 className='text-2xl mb-4'>{section.heading}</h3>
            <div className='flex flex-wrap gap-8 mb-4'>
              {section.items.map((item) => (
                <p key={item.key}>
                  {item.label}
                  {section.kind === 'boolean' ? (
                    <>
                      {item.answer === true && (
                        <Check className='inline-block ml-1' />
                      )}
                      {item.answer === false && (
                        <X className='inline-block ml-1' />
                      )}
                    </>
                  ) : (
                    item.answer
                  )}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
