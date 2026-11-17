"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { Switch } from "@/components/ui/switch";

export function Navbar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();

  const links = [
    { href: "/", label: "Home" },
    { href: "/user/quotes/liked", label: "Liked Quotes" },
  ];

  return (
    <nav className="w-full border-b bg-background">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6 sm:py-4">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-foreground"
        >
          Random Quotes
        </Link>

        <div className="flex w-full items-center justify-between sm:w-auto sm:justify-end sm:gap-3">
          <NavigationMenu>
            <NavigationMenuList className="flex-wrap gap-1">
              {links.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <NavigationMenuItem key={link.href}>
                    <NavigationMenuLink
                      render={<Link href={link.href} />}
                      active={isActive}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {link.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex shrink-0 items-center gap-2">
            <Sun className="size-4 text-muted-foreground" />

            <Switch
              checked={mounted && resolvedTheme === "dark"}
              onCheckedChange={(checked) =>
                setTheme(checked ? "dark" : "light")
              }
              aria-label="Toggle dark mode"
            />

            <Moon className="size-4 text-muted-foreground" />
          </div>
        </div>
      </div>
    </nav>
  );
}
