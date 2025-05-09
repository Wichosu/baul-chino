"use client"

import * as React from "react"
import Link from "next/link"

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
    <NavigationMenu>
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
