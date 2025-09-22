import * as React from 'react';
import { NavbarListItem } from './NavbarListItem';
import { NavbarContent } from './NavbarContent';
import { NavbarTrigger } from './NavbarTrigger';
import { NavbarItem } from './NavbarItem';
import { NavbarList } from './NavbarList';
import { NavbarRoot } from './NavbarRoot';
import { NavbarIndicator } from './NavbarIndicator';
import { NavbarViewport } from './NavbarViewport';

export function Navbar() {
  return (
    <NavbarRoot>
      <NavbarList>
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
