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

function createNavItem(href: string, title: string): NavItem {
  return {
    type: 'link',
    href,
    title,
  };
}

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
    createNavItem('/libros-hsk', t('HskBooks')),
    createNavItemWithContent(t('Tools'), [
      createNavContent(
        '/mazos-anki',
        t('AnkiDecks'),
        t('Descriptions.AnkiDecks')
      ),
      createNavContent('/canales', t('Channels'), t('Descriptions.Channels')),
      createNavContent('/hanzi', t('Hanzi'), t('Descriptions.Hanzi')),
    ]),
  ];

  return (
    <NavbarRoot>
      <NavbarList>
        {NavbarItems.map((item, index) => (
          <NavbarItem key={index}>
            {item.type === 'link' && (
              <NavbarLink href={item.href}>{item.title}</NavbarLink>
            )}
            {item.type === 'trigger' && (
              <>
                <NavbarTrigger>{item.trigger}</NavbarTrigger>
                <NavbarContent>
                  {item.content.map((listItem, index) => (
                    <NavbarListItem
                      key={index}
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
          <NavbarTrigger>Learn</NavbarTrigger>
          <NavbarContent>
            <NavbarListItem href='https://stitches.dev/' title='Stitches'>
              CSS-in-JS with best-in-class developer experience.
            </NavbarListItem>
            <NavbarListItem href='/colors' title='Colors'>
              Beautiful, thought-out palettes with auto dark mode.
            </NavbarListItem>
            <NavbarListItem href='https://icons.radix-ui.com/' title='Icons'>
              A crisp set of 15x15 icons, balanced and consistent.
            </NavbarListItem>
          </NavbarContent>
        </NavbarItem>

        <NavbarItem>
          <NavbarTrigger>Overview</NavbarTrigger>
          <NavbarContent>
            <NavbarListItem
              title='Introduction'
              href='/primitives/docs/overview/introduction'
            >
              Build high-quality, accessible design systems and web apps.
            </NavbarListItem>
            <NavbarListItem
              title='Getting started'
              href='/primitives/docs/overview/getting-started'
            >
              A quick tutorial to get you up and running with Radix Primitives.
            </NavbarListItem>
            <NavbarListItem
              title='Styling'
              href='/primitives/docs/guides/styling'
            >
              Unstyled and compatible with any styling solution.
            </NavbarListItem>
            <NavbarListItem
              title='Animation'
              href='/primitives/docs/guides/animation'
            >
              Use CSS keyframes or any animation library of your choice.
            </NavbarListItem>
            <NavbarListItem
              title='Accessibility'
              href='/primitives/docs/overview/accessibility'
            >
              Tested in a range of browsers and assistive technologies.
            </NavbarListItem>
            <NavbarListItem
              title='Releases'
              href='/primitives/docs/overview/releases'
            >
              Radix Primitives releases and their changelogs.
            </NavbarListItem>
          </NavbarContent>
        </NavbarItem>

        <NavbarIndicator />
      </NavbarList>

      <NavbarViewport />
    </NavbarRoot>
  );
}
