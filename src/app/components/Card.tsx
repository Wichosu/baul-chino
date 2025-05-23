import { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils";

export function CompoundCard({ children }: { children: ReactNode }) {
  return (
    <Card>
      { children }
    </Card>
  )
}

CompoundCard.Header = Header
CompoundCard.Content = Content
CompoundCard.Footer = Footer

function Header({ children }: { children: ReactNode }) {
  return (
    <CardHeader>
      { children }
    </CardHeader>
  )
}

Header.Title = Title
Header.Description = Description

function Title({ children, className }: { children: string, className?: string }) {
  return (
    <CardTitle className={cn(`${className}`)}>{ children }</CardTitle>
  )
}

function Description({ children }: { children: string }) {
  return (
    <CardDescription>{ children }</CardDescription>
  )
}

function Content({ children }: { children: ReactNode }) {
  return (
    <CardContent>
      { children }
    </CardContent>
  )
}

function Footer({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <CardFooter className={cn(`${className}`)}>
      { children }
    </CardFooter>
  )
}
