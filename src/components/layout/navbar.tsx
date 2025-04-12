"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/shared/theme-toggle"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const navigationItems = [
  {
    title: "About",
    items: [
      { title: "About RJIT", href: "/about" },
      { title: "Late Shri K F Rustamji", href: "/about/kf-rustamji" },
      { title: "Vision & Mission", href: "/about/vision-mission" },
      { title: "Vice Chairman's Message", href: "/about/vice-chairman" },
      { title: "Chief Administrator's Message", href: "/about/chief-administrator" },
    ],
  },
  {
    title: "Admissions",
    items: [
      { title: "Admission Procedure", href: "/admissions/procedure" },
      { title: "Admission Enquiry", href: "/admissions/enquiry" },
      { title: "Courses", href: "/admissions/courses" },
      { title: "Fee Structure", href: "/admissions/fee-structure" },
    ],
  },
  {
    title: "Academics",
    items: [
      { title: "Departments", href: "/academics/departments" },
      { title: "Faculty", href: "/academics/faculty" },
      { title: "Supporting Staff", href: "/academics/staff" },
    ],
  },
  {
    title: "Facilities",
    items: [
      { title: "Central Library", href: "/facilities/library" },
      { title: "Laboratories", href: "/facilities/labs" },
      { title: "Canteen", href: "/facilities/canteen" },
      { title: "Transport Facility", href: "/facilities/transport" },
      { title: "Hostels", href: "/facilities/hostels" },
    ],
  },
  {
    title: "Placements",
    href: "/placements",
  },
  {
    title: "MoUs",
    items: [
      { title: "MoU with NIT Jalandhar", href: "/mous/nit-jalandhar" },
      { title: "MoU with UIT, RGPV", href: "/mous/uit-rgpv" },
      { title: "MoU with Polish Academy of Science", href: "/mous/poland" },
      { title: "MoU with CRISP, RGPV", href: "/mous/crisp-rgpv" },
    ],
  },
  {
    title: "NIRF",
    href: "/nirf",
  },
  {
    title: "Contact",
    href: "/contact",
  },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="https://ext.same-assets.com/3072099643.jpeg"
              alt="RJIT Logo"
              className="h-12 w-auto"
            />
            <div className="hidden md:flex flex-col">
              <span className="text-xl font-bold">Rustamji Institute of Technology</span>
              <span className="text-xs">ISO9001:2015 Certified (An Institute of Border Security Force)</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <NavigationMenu>
            <NavigationMenuList>
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.items ? (
                    <>
                      <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {item.items.map((subItem) => (
                            <li key={subItem.title}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={subItem.href}
                                  className={cn(
                                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  )}
                                >
                                  <div className="text-sm font-medium leading-none">{subItem.title}</div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link href={item.href || "#"} passHref legacyBehavior>
                      <NavigationMenuLink className="px-4 py-2 hover:text-primary">
                        {item.title}
                      </NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <ThemeToggle />
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-full"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 py-3">
            {navigationItems.map((item) => (
              <div key={item.title} className="py-2">
                {item.items ? (
                  <div className="space-y-2">
                    <div className="font-medium">{item.title}</div>
                    <div className="ml-4 space-y-1 border-l pl-2">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="block py-1 text-sm hover:text-primary"
                          onClick={toggleMobileMenu}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href || "#"}
                    className="block py-1 font-medium hover:text-primary"
                    onClick={toggleMobileMenu}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
