import {
  AllowedMarginScale,
  AllowedScale,
  AllowedWidthScale,
} from './Accordion.types';

export const paddingClass: Record<AllowedScale, string> = {
  none: 'px-0 py-0',
  '1': 'px-1 py-0.5 md:px-2 md:py-1',
  '2': 'px-2 py-1 md:px-4 md:py-2',
  '3': 'px-3 py-1.5 md:px-6 md:py-3',
};

export const marginClass: Record<AllowedMarginScale, string> = {
  none: 'm-0',
  '1': 'm-2',
  '2': 'm-4',
  '3': 'm-6',
  center: 'mx-auto',
};

export const marginYClass: Record<AllowedMarginScale, string> = {
  none: 'my-0',
  '1': 'my-2 md:my-2',
  '2': 'my-4 md:my-4',
  '3': 'my-6 md:my-6',
  center: 'my-auto',
};

export const marginXClass: Record<AllowedMarginScale, string> = {
  none: 'mx-0',
  '1': 'mx-1 md:mx-2',
  '2': 'mx-2 md:mx-4',
  '3': 'mx-3 md:mx-6',
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
