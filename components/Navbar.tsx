"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Sun, Moon } from "lucide-react";


import { useTheme } from "next-themes"
 
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
];

export default function Navbar() {
    const pathname = usePathname();
    const { setTheme } = useTheme()

    return (
        <header className="sticky top-4 inset-x-0 z-50 w-full">
          <div className="max-w-[66rem] mx-auto px-4">
            <nav className="bg-white/30 dark:bg-white backdrop-blur-md rounded-[26px] py-2 px-4 shadow-lg">
              <div className="flex items-center justify-between">
                <Link href="/" className="flex-none">
                    <p className="text-black text-xl font-bold">GeniusTech</p>
                </Link>
    
                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-2">
                  {navLinks.map((link, index) => (
                    <Link 
                      key={index}
                      href={link.href}
                      className={`text-sm flex items-center justify-center h-12 px-4 ${pathname === link.href ? 'text-yellow-400' : 'text-black hover:text-yellow-400'} transition-colors`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                          <span className="sr-only">Toggle theme</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setTheme("light")}>
                          Light
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("dark")}>
                          Dark
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("system")}>
                          System
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  <Link href="/contact" className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-yellow-300 transition-colors">
                    Contact us
                  </Link>
                </div>
    
                {/* Mobile Navigation */}
                <Sheet >
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden text-black">
                      <Menu className="h-6 w-6 dark:text-yellow-400" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[300px] bg-white dark:bg-black text-black">
                    <nav className="flex flex-col space-y-4 mt-8">
                      {navLinks.map((link, index) => (
                        <Link 
                          key={index}
                          href={link.href}
                          className={`py-2 dark:text-white flex items-center justify-center h-12 px-4 ${pathname === link.href ? 'text-yellow-400' : 'text-black hover:text-yellow-400'} transition-colors`}
                        >
                          {link.label}
                        </Link>
                      ))}
                      <div className="py-2 flex items-center justify-center">
<DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                          <Moon className="absolute text-yellow-400 h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                          <span className="sr-only">Toggle theme</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setTheme("light")}>
                          Light
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("dark")}>
                          Dark
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("system")}>
                          System
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                      </div>
                                       

                      <Link href="/contact" className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-yellow-300 transition-colors text-center">
                        Contact us
                      </Link>
                    </nav>
                  </SheetContent>
                </Sheet>
              </div>
            </nav>
          </div>
        </header>
    );
}
