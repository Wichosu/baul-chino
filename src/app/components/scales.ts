export type AllowedScale = 'none' | '1' | '2' | '3';

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
