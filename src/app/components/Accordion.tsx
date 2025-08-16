import React from 'react';
import { Accordion } from 'radix-ui';
import { ChevronDown } from 'lucide-react';

type AllowedScale = 'none' | '1' | '2' | '3';
type AllowedWidthScale = 'xs' | 'md' | 'lg' | 'full';
type AllowedMarginScale = 'none' | '1' | '2' | '3' | 'center';

type AccordionRootProps = {
  type?: 'single' | 'multiple';
  padding?: AllowedScale;
  margin?: AllowedMarginScale;
  rounded?: AllowedScale;
  elevation?: AllowedScale;
  width?: AllowedWidthScale;
  children: React.ReactNode;
};

type AccordionItemProps = {
  value: string;
  padding?: AllowedScale;
  margin?: AllowedMarginScale;
  rounded?: AllowedScale;
  elevation?: AllowedScale;
  children: React.ReactNode;
};

type AccordionTriggerProps = {
  padding?: AllowedScale;
  margin?: AllowedMarginScale;
  rounded?: AllowedScale;
  elevation?: AllowedScale;
  children: string;
};

type AccordionContentProps = {
  padding?: AllowedScale;
  rounded?: AllowedScale;
  elevation?: AllowedScale;
  children: React.ReactNode;
};

const paddingClass: Record<AllowedScale, string> = {
  none: 'px-0 py-0',
  '1': 'px-2 py-1',
  '2': 'px-4 py-2',
  '3': 'px-6 py-3',
};

const marginClass: Record<AllowedMarginScale, string> = {
  none: 'm-0',
  '1': 'm-2',
  '2': 'm-4',
  '3': 'm-6',
  center: 'mx-auto',
};

const roundedClass: Record<AllowedScale, string> = {
  none: 'rounded-none',
  '1': 'rounded-md',
  '2': 'rounded-lg',
  '3': 'rounded-xl',
};

const elevationClass: Record<AllowedScale, string> = {
  none: '',
  '1': 'shadow',
  '2': 'shadow-md',
  '3': 'shadow-lg',
};

const widthClass: Record<AllowedWidthScale, string> = {
  full: 'w-full',
  xs: 'w-xs',
  md: 'w-md',
  lg: 'w-lg',
};

export function AccordionRoot({
  type = 'single',
  padding = 'none',
  margin = 'center',
  rounded = 'none',
  elevation = 'none',
  width = 'full',
  children,
  ...props
}: AccordionRootProps) {
  const className = `${widthClass[width]} ${paddingClass[padding]} ${marginClass[margin]} ${roundedClass[rounded]} ${elevationClass[elevation]}`;

  return (
    <Accordion.Root type={type} className={className} {...props} collapsible>
      {children}
    </Accordion.Root>
  );
}

export function AccordionItem({
  value,
  padding = 'none',
  margin = '1',
  rounded = 'none',
  elevation = 'none',
  children,
  ...props
}: AccordionItemProps) {
  const className = `${paddingClass[padding]} ${marginClass[margin]} ${roundedClass[rounded]} ${elevationClass[elevation]}`;

  return (
    <Accordion.Item value={value} className={className} {...props}>
      {children}
    </Accordion.Item>
  );
}

export function AccordionTrigger({
  padding = '1',
  rounded = 'none',
  elevation = '1',
  children,
}: AccordionTriggerProps) {
  const className = `group flex justify-between w-full ${paddingClass[padding]} ${roundedClass[rounded]} ${elevationClass[elevation]}`;

  return (
    <Accordion.Header>
      <Accordion.Trigger className={className}>
        {children}{' '}
        <ChevronDown
          aria-hidden
          className='transition-transform duration-200 ease-out group-data-[state=open]:rotate-180'
        />
      </Accordion.Trigger>
    </Accordion.Header>
  );
}

//this component should not modify padding and margin
export function AccordionContent({
  padding = '2',
  rounded = 'none',
  elevation = 'none',
  children,
}: AccordionContentProps) {
  const contentClassName = `overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down`;
  const divClassName = `${paddingClass[padding]} ${roundedClass[rounded]} ${elevationClass[elevation]}`;

  return (
    <Accordion.Content className={contentClassName}>
      <div className={divClassName}>{children}</div>
    </Accordion.Content>
  );
}

// const AccordionContent = React.forwardRef(
// 	({ children, className, ...props }, forwardedRef) => (
// 		<Accordion.Content
// 			className={classNames(
// 				"overflow-hidden bg-mauve2 text-[15px] text-mauve11 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown",
// 				className,
// 			)}
// 			{...props}
// 			ref={forwardedRef}
// 		>
// 			<div className="px-5 py-[15px]">{children}</div>
// 		</Accordion.Content>
// 	),
// );

// const AccordionItem = React.forwardRef(
// 	({ children, className, ...props }, forwardedRef) => (
// 		<Accordion.Item
// 			className={classNames(
// 				"mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px] focus-within:shadow-mauve12",
// 				className,
// 			)}
// 			{...props}
// 			ref={forwardedRef}
// 		>
// 			{children}
// 		</Accordion.Item>
// 	),
// );
// function demo() {
//   return <Accordion>hi</Accordion>;
// }
