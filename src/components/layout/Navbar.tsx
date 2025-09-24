"use client"

import Link from "next/link";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import { Github, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const components: { title: string; href: string; description: string }[] = [
    {
      title: "Alert Dialog",
      href: "/docs/primitives/alert-dialog",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Hover Card",
      href: "/docs/primitives/hover-card",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "Progress",
      href: "/docs/primitives/progress",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "Scroll-area",
      href: "/docs/primitives/scroll-area",
      description: "Visually or semantically separates content.",
    },
    {
      title: "Tabs",
      href: "/docs/primitives/tabs",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
      title: "Tooltip",
      href: "/docs/primitives/tooltip",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
  ];

  const {setTheme,theme} = useTheme()

  // handleTheme
  const handleTheme = ()=>{
    if (theme === "dark"){
      setTheme("light")
    }else{
      setTheme("dark")
    }
  }

  return (
    <div className="w-[100%] min-h-[70px] rounded-full sticky top-[20px] shadow flex justify-between place-items-center border-2 px-[20px] py-[10px] bg-background text-foreground">
      {/* Left: Logo */}
      <Link href="/" className="text-2xl font-bold">
        🚀 API Zilla
      </Link>

      <div>
        <NavigationMenu>
          <NavigationMenuList className="flex justify-center place-items-center gap-[30px]">
            <NavigationMenuItem>
              <Link href={"/"}>Home</Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger
               className="bg-transparent "
              >Components</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href={"/"}>API</Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex items-center gap-4">
        {/* <Button variant="ghost" size="icon">
          <Github className="w-5 h-5" />
        </Button> */}
        <Button variant="ghost" size="icon" className="cursor-pointer" onClick={handleTheme}>
          <Sun className="w-5 h-5" />
        </Button>
        <Button className="cursor-pointer">Login</Button>
      </div>
    </div>
  );
};

function ListItem({
  title,
  children,
  href,
}: {
  title: string;
  children: React.ReactNode;
  href: string;
}) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export default Navbar;
