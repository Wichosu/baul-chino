import React from 'react';

type AllowedTags = 'div' | 'figure' | 'section' | 'article';
type AllowedScale = 'none' | '1' | '2' | '3';

type Props = {
  as?: AllowedTags;
  children?: React.ReactNode | string;
  elevation?: AllowedScale;
  border?: AllowedScale;
  padding?: AllowedScale;
  margin?: AllowedScale;
  rounded?: AllowedScale;
};

const allowedTags: AllowedTags[] = ['div', 'figure', 'section', 'article'];

const elevationClass: Record<AllowedScale, string> = {
  none: '',
  '1': 'shadow',
  '2': 'shadow-md',
  '3': 'shadow-lg',
};

const borderClass: Record<AllowedScale, string> = {
  none: 'border-0',
  '1': 'border',
  '2': 'border-2',
  '3': 'border-4',
};

const paddingClass: Record<AllowedScale, string> = {
  none: 'p-0',
  '1': 'p-2',
  '2': 'p-4',
  '3': 'p-8',
};

const marginClass: Record<AllowedScale, string> = {
  none: 'm-0',
  '1': 'm-2',
  '2': 'm-4',
  '3': 'm-8',
};

const roundedClass: Record<AllowedScale, string> = {
  none: 'rounded-none',
  '1': 'rounded-md',
  '2': 'rounded-lg',
  '3': 'rounded-xl',
};

export default function Card({
  as: Tag = 'div',
  children,
  elevation = '1',
  border = 'none',
  padding = '2',
  margin = '2',
  rounded = '2',
}: Props) {
  if (!allowedTags.includes(Tag)) {
    throw new Error(
      `Tag ${Tag} is not allowed. The tags that are allowed are: ${allowedTags.join(
        ', '
      )}`
    );
  }

  const className = `
    border-gray-200 bg-white
    ${elevationClass[elevation]} ${borderClass[border]} ${paddingClass[padding]} 
    ${marginClass[margin]} ${roundedClass[rounded]}
  `;

  return <Tag className={className}>{children}</Tag>;
}
