"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { ScrollArea } from "@/components/ui/scroll-area"

import { useTranslations } from "next-intl"

import { LanguageSwitcher } from "./LanguageSwitcher"

type ListItem = {
  title: string
  href: string
  description: string
}

function createListItem(title: string, href: string, description: string): ListItem {
  return {
    title,
    href,
    description,
  }
}

const tools: ListItem[] = [
  createListItem("AnkiDecks", "/mazos-anki", "AnkiDecks"),
  createListItem("HskBooks", "/libros-hsk", "HskBooks"),
  createListItem("Channels", "/canales", "Channels"),
  createListItem("Hanzi", "/hanzi", "Hanzi"),
]

const templates: ListItem[] = [
  createListItem("Templates", "/plantillas", "Templates"),
  createListItem("TemplateGenerator", "/plantillas/generador", "TemplateGenerator"),
]

export function Navbar() {
  const t = useTranslations("Navbar")

  return (
    <NavigationMenu className={cn("hidden lg:block")}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/">Baúl Chino</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/libros-hsk">{t("HskBooks")}</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>{t("Tools")}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {tools.map((tool) => (
                <ListItem
                  key={t(tool.title)}
                  title={t(tool.title)}
                  href={tool.href}
                >
                  {t(`Descriptions.${tool.description}`)}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>{t("Templates")}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {templates.map((template) => (
                <ListItem
                  key={t(template.title)}
                  title={t(template.title)}
                  href={template.href}
                >
                  {t(`Descriptions.${template.description}`)}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className={cn("flex gap-2")}>
          <LanguageSwitcher />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export function MobileNavbar() {
  const t = useTranslations("Navbar")
  
  return (
    <Sheet>
      <SheetTrigger className={cn("lg:hidden")} asChild>
        <Image alt="Navbar Menu" src="/menu.svg" width={20} height={20} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetClose asChild>
            <Link href="/">
              <SheetTitle className="py-4">Baúl chino</SheetTitle>
            </Link>
          </SheetClose>
          <LanguageSwitcher />
        </SheetHeader>
        <div>
          <NavigationMenu>
            <NavigationMenuList className="flex-col items-start">
              <ScrollArea className="h-96">
                {tools.map((tool) => (
                  <NavigationMenuItem key={tool.title}>
                    <SheetClose asChild>
                      <NavigationMenuLink asChild>
                        <Link 
                          href={tool.href}
                          className="block w-full p-2 hover:bg-accent rounded-md"
                        >
                          <div className="text-sm font-medium leading-none">{t(tool.title)}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {t(`Descriptions.${tool.description}`)}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </SheetClose>
                  </NavigationMenuItem>
                ))}
                {templates.map((template) => (
                  <NavigationMenuItem key={template.title}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={template.href}
                        className="block p-2 hover:bg-accent rounded-md"
                      >
                        <div className="text-sm font-medium leading-none">{t(template.title)}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {t(`Descriptions.${template.description}`)}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </ScrollArea>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </SheetContent>
    </Sheet>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
