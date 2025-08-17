import {
  AllowedMarginScale,
  AllowedScale,
  AllowedWidthScale,
} from './Accordion.types';

export const paddingClass: Record<AllowedScale, string> = {
  none: 'px-0 py-0',
  '1': 'px-2 py-1',
  '2': 'px-4 py-2',
  '3': 'px-6 py-3',
};

export const marginClass: Record<AllowedMarginScale, string> = {
  none: 'm-0',
  '1': 'm-2',
  '2': 'm-4',
  '3': 'm-6',
  center: 'mx-auto',
};

export const marginXClass: Record<AllowedMarginScale, string> = {
  none: 'mx-0',
  '1': 'mx-2',
  '2': 'mx-4',
  '3': 'mx-6',
  center: 'mx-auto',
};

export const roundedClass: Record<AllowedScale, string> = {
  none: 'rounded-none',
  '1': 'rounded-md',
  '2': 'rounded-lg',
  '3': 'rounded-xl',
};

export const elevationClass: Record<AllowedScale, string> = {
  none: '',
  '1': 'shadow',
  '2': 'shadow-md',
  '3': 'shadow-lg',
};

export const widthClass: Record<AllowedWidthScale, string> = {
  full: 'w-full',
  xs: 'w-xs',
  md: 'w-md',
  lg: 'w-lg',
};
