'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Search, ChevronDown, PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { categories } from '@/lib/mock-data';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <PlusCircle className="h-8 w-8 text-primary" />
            <span className="font-headline text-2xl font-bold">AdSpot</span>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="group flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground">
                  <span>All Categories</span>
                  <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {categories.map((cat) => (
                  <DropdownMenuItem key={cat.name} asChild>
                    <Link href={`/${cat.name.toLowerCase()}`}>{cat.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/search"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Locations
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden md:inline-flex" asChild>
            <Link href="/search">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
            </Link>
          </Button>
          <Button
            variant="outline"
            className="hidden hover:bg-accent hover:text-accent-foreground md:inline-flex"
            asChild
          >
            <Link href="/login">Login / Sign Up</Link>
          </Button>
          <Button asChild>
            <Link href="/post">
              <PlusCircle className="mr-2 h-5 w-5" />
              Post Ad
            </Link>
          </Button>
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                  <Link href="/" className="mb-8 flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                     <PlusCircle className="h-8 w-8 text-primary" />
                    <span className="font-headline text-2xl font-bold">
                      AdSpot
                    </span>
                  </Link>
                </SheetHeader>
                <nav className="flex flex-col gap-4">
                  <Link
                    href="/search"
                    className="text-lg font-medium text-muted-foreground hover:text-foreground"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Search
                  </Link>
                  <p className="text-lg font-medium text-muted-foreground">Categories</p>
                  {categories.map(cat => (
                     <Link
                        key={cat.name}
                        href={`/${cat.name.toLowerCase()}`}
                        className="ml-4 text-lg font-medium text-muted-foreground hover:text-foreground"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        {cat.name}
                    </Link>
                  ))}
                  
                  <Link
                    href="/login"
                    className="mt-4 text-lg font-medium text-muted-foreground hover:text-foreground"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Login / Sign Up
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
