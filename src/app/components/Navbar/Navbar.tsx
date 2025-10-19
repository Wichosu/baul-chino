import * as React from 'react';
import { NavbarListItem } from './NavbarListItem';
import { NavbarContent } from './NavbarContent';
import { NavbarTrigger } from './NavbarTrigger';
import { NavbarItem } from './NavbarItem';
import { NavbarList } from './NavbarList';
import { NavbarRoot } from './NavbarRoot';
import { NavbarIndicator } from './NavbarIndicator';
import { NavbarViewport } from './NavbarViewport';
import { NavbarLink } from './NavbarLink';
import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from '../LanguageSwitcher';

type NavItem =
  | {
      type: 'trigger';
      trigger: string;
      content: NavContent[];
    }
  | {
      type: 'link';
      href: string;
      title: string;
    };

type NavContent = {
  href: string;
  title: string;
  description: string;
};

// function createNavItem(href: string, title: string): NavItem {
//   return {
//     type: 'link',
//     href,
//     title,
//   };
// }

function createNavItemWithContent(
  trigger: string,
  content: NavContent[]
): NavItem {
  return {
    type: 'trigger',
    trigger,
    content,
  };
}

function createNavContent(
  href: string,
  title: string,
  description: string
): NavContent {
  return {
    href,
    title,
    description,
  };
}

export function Navbar() {
  const t = useTranslations('Navbar');

  const NavbarItems: NavItem[] = [
    createNavItemWithContent(t('Hsk'), [
      createNavContent(
        '/libros-hsk',
        t('HskBooks'),
        t('Descriptions.HskBooks')
      ),
      createNavContent(
        '/hsk-audios',
        t('HskAudios'),
        t('Descriptions.HskAudios')
      ),
      createNavContent(
        '/hsk-mock-test',
        t('HskMockTest'),
        t('Descriptions.HskMockTest')
      ),
      createNavContent(
        '/mazos-anki',
        t('AnkiDecks'),
        t('Descriptions.AnkiDecks')
      ),
    ]),
    createNavItemWithContent(t('Tools'), [
      createNavContent('/canales', t('Channels'), t('Descriptions.Channels')),
      createNavContent('/hanzi', t('Hanzi'), t('Descriptions.Hanzi')),
      createNavContent(
        '/plantillas',
        t('Templates'),
        t('Descriptions.Templates')
      ),
      createNavContent(
        '/plantillas/generador',
        t('TemplateGenerator'),
        t('Descriptions.TemplateGenerator')
      ),
    ]),
  ];

  return (
    <NavbarRoot>
      <NavbarList>
        <NavbarItem>
          <NavbarLink href='/'>
            <picture className='w-5'>
              <img src='/logo.svg' alt={t('LogoAlt')} />
            </picture>
          </NavbarLink>
        </NavbarItem>
        {NavbarItems.map((item, index) => (
          <NavbarItem key={`navitem-${index}`}>
            {item.type === 'link' && (
              <NavbarLink href={item.href}>{item.title}</NavbarLink>
            )}
            {item.type === 'trigger' && (
              <>
                <NavbarTrigger>{item.trigger}</NavbarTrigger>
                <NavbarContent>
                  {item.content.map((listItem, index) => (
                    <NavbarListItem
                      key={`navlistitem-${index}`}
                      href={listItem.href}
                      title={listItem.title}
                    >
                      {listItem.description}
                    </NavbarListItem>
                  ))}
                </NavbarContent>
              </>
            )}
          </NavbarItem>
        ))}
        <NavbarItem>
          <div className='flex h-full items-center'>
            <LanguageSwitcher />
          </div>
        </NavbarItem>
        <NavbarIndicator />
      </NavbarList>
      <NavbarViewport />
    </NavbarRoot>
  );
}
