import React from 'react';
import { Accordion } from 'radix-ui';
import { ChevronDown } from 'lucide-react';

type AllowedScale = 'none' | '1' | '2' | '3';

type AccordionRootProps = {
  type?: 'single' | 'multiple';
  padding?: AllowedScale;
  rounded?: AllowedScale;
  elevation?: AllowedScale;
  children: React.ReactNode;
};

type AccordionItemProps = {
  value: string;
  padding?: AllowedScale;
  rounded?: AllowedScale;
  elevation?: AllowedScale;
  children: React.ReactNode;
};

type AccordionTriggerProps = {
  padding?: AllowedScale;
  rounded?: AllowedScale;
  elevation?: AllowedScale;
  width?: number | 'full';
  children: string;
};

const paddingClass: Record<AllowedScale, string> = {
  none: 'px-0 py-0',
  '1': 'px-2 py-1',
  '2': 'px-4 py-2',
  '3': 'px-6 py-3',
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

export function AccordionRoot({
  type = 'single',
  padding = '2',
  rounded = '1',
  elevation = '1',
  children,
  ...props
}: AccordionRootProps) {
  const className = `w-fit ${paddingClass[padding]} ${roundedClass[rounded]} ${elevationClass[elevation]}`;

  return (
    <Accordion.Root type={type} className={className} {...props}>
      {children}
    </Accordion.Root>
  );
}

export function AccordionItem({
  value,
  padding = 'none',
  rounded = 'none',
  elevation = 'none',
  children,
  ...props
}: AccordionItemProps) {
  const className = `${paddingClass[padding]} ${roundedClass[rounded]} ${elevationClass[elevation]}`;

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
  width = 'full',
  children,
}: AccordionTriggerProps) {
  const className = `flex justify-between w-${width} ${paddingClass[padding]} ${roundedClass[rounded]} ${elevationClass[elevation]}`;

  return (
    <Accordion.Header>
      <Accordion.Trigger className={className}>
        {children} <ChevronDown />
      </Accordion.Trigger>
    </Accordion.Header>
  );
}

// const AccordionTrigger = React.forwardRef(
// 	({ children, className, ...props }, forwardedRef) => (
// 		<Accordion.Header className="flex">
// 			<Accordion.Trigger
// 				className={classNames(
// 					"group flex h-[45px] flex-1 cursor-default items-center justify-between bg-mauve1 px-5 text-[15px] leading-none text-violet11 shadow-[0_1px_0] shadow-mauve6 outline-none hover:bg-mauve2",
// 					className,
// 				)}
// 				{...props}
// 				ref={forwardedRef}
// 			>
// 				{children}
// 				<ChevronDownIcon
// 					className="text-violet10 transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180"
// 					aria-hidden
// 				/>
// 			</Accordion.Trigger>
// 		</Accordion.Header>
// 	),
// );

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
