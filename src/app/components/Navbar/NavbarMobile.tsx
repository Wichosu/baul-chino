'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Dialog } from 'radix-ui';
import { Menu, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { KoFiButton } from '../KoFiButton';
import { NavItem } from './types';

type Props = {
  items: NavItem[];
  isCurrent: (href: string) => boolean;
};

export function NavbarMobile({ items, isCurrent }: Props) {
  const t = useTranslations('Navbar');
  const [open, setOpen] = useState(false);

  //closing the sheet if the viewport grows to desktop while it is open
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    const handleChange = () => {
      if (mediaQuery.matches) setOpen(false);
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <>
      <div className='flex h-11 w-full items-center justify-between rounded-md bg-yellow-100 px-1 shadow-md lg:hidden'>
        <Link
          href='/'
          aria-current={isCurrent('/') ? 'page' : undefined}
          className='flex min-h-11 items-center rounded px-3 no-underline outline-none hover:bg-yellow-200 focus:shadow-[0_0_0_4px] focus:shadow-yellow-900'
        >
          <picture className='w-5'>
            <Image
              src='/logo.svg'
              alt={t('LogoAlt')}
              width={512}
              height={512}
              loading='eager'
              unoptimized
            />
          </picture>
        </Link>
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <button
              type='button'
              aria-label={t(open ? 'CloseMenu' : 'OpenMenu')}
              className='flex min-h-11 min-w-11 items-center justify-center rounded text-black outline-none hover:bg-yellow-200 focus:shadow-[0_0_0_4px] focus:shadow-yellow-900'
            >
              {open ? (
                <X aria-hidden className='size-6' />
              ) : (
                <Menu aria-hidden className='size-6' />
              )}
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className='fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out' />
            <Dialog.Content
              aria-describedby={undefined}
              className='fixed inset-0 z-50 mx-auto flex w-full max-w-xl flex-col bg-yellow-100 text-black outline-none data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out'
            >
              <div className='flex items-center justify-between border-b border-yellow-200 px-4 py-2'>
                <Dialog.Title className='text-lg font-medium leading-none'>
                  {t('MenuTitle')}
                </Dialog.Title>
                <Dialog.Close asChild>
                  <button
                    type='button'
                    aria-label={t('CloseMenu')}
                    className='flex min-h-11 min-w-11 items-center justify-center rounded text-black outline-none hover:bg-yellow-200 focus:shadow-[0_0_0_4px] focus:shadow-yellow-900'
                  >
                    <X aria-hidden className='size-6' />
                  </button>
                </Dialog.Close>
              </div>
              <div className='flex-1 overflow-y-auto px-4 py-4'>
                {items.map((item) => (
                  <section key={item.trigger} className='mb-6 last:mb-0'>
                    <h2 className='mb-2 px-3 text-lg font-medium'>
                      {item.trigger}
                    </h2>
                    <ul className='m-0 flex list-none flex-col gap-1 p-0'>
                      {item.content.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            onClick={() => setOpen(false)}
                            aria-current={
                              isCurrent(link.href) ? 'page' : undefined
                            }
                            className={`block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-yellow-200 focus:shadow-[0_0_0_3px] focus:shadow-yellow-900 ${
                              isCurrent(link.href) ? 'bg-yellow-200' : ''
                            }`}
                          >
                            <span className='mb-1 block font-medium leading-6'>
                              {link.title}
                            </span>
                            <span className='block leading-6'>
                              {link.description}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
              <div className='flex flex-wrap items-center justify-between gap-4 border-t border-yellow-200 px-4 py-4'>
                <LanguageSwitcher />
                <KoFiButton />
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </>
  );
}
