import React from 'react';
import Link from 'next/link';

type AllowedTags = 'link' | 'button';
type AllowedTypes = 'primary' | 'warning' | 'delete' | 'disabled';
type AllowedScale = 'none' | '1' | '2' | '3';

type Props = {
  as?: AllowedTags;
  href?: string;
  type?: AllowedTypes;
  padding?: AllowedScale;
  margin?: AllowedScale;
  rounded?: AllowedScale;
  children: string | React.ReactNode;
};

/**
 * DO NOT FORGET THE HOVER
 * DO NOT FORGET THE FOCUS
 * DO NOT FORGET THE ACTIVE
 * DO NOT FORGET THE DISABLED
 * IF DISABLED SHOULD IT BE FOCUSABLE?
 */
const allowedTags: AllowedTags[] = ['link', 'button'];
const allowedTypes: AllowedTypes[] = [
  'primary',
  'warning',
  'delete',
  'disabled',
];

const typeClass: Record<AllowedTypes, string> = {
  primary: 'bg-blue-600 text-white cursor-pointer',
  warning: 'bg-yellow-600 text-white cursor-pointer',
  delete: 'bg-red-600 text-white cursor-pointer',
  disabled: 'bg-gray-300 text-gray-500 cursor-not-allowed',
};

export default function Button({
  as: Tag = 'button',
  href = '',
  type = 'primary',
  children,
}: Props) {
  if (!allowedTags.includes(Tag)) {
    throw new Error(
      `Tag ${Tag} is not allowed. The tags that are allowed are: ${allowedTags.join(
        ', '
      )}`
    );
  }

  if (!allowedTypes.includes(type)) {
    throw new Error(
      `Type ${type} is not allowed. The types that are allowed are: ${allowedTypes.join(
        ', '
      )}`
    );
  }

  if (Tag === 'link' && !href) {
    throw new Error('href is required when as is link');
  }

  if (Tag === 'button' && href) {
    throw new Error('href is not allowed when as is button');
  }

  if (typeof href !== typeof 'string') {
    throw new Error('href must be a string');
  }

  const className = `${typeClass[type]}`;

  return Tag === 'link' ? (
    <Link href={href} target='_blank' className={className}>
      {children}
    </Link>
  ) : (
    <button className={className}>{children}</button>
  );
}
