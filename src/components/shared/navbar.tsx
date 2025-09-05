'use client';

import { useState } from 'react';
import { Menu, X, Search, ChevronDown, PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <a href="/" className="flex items-center gap-2">
            <PlusCircle className="h-8 w-8 text-primary" />
            <span className="font-headline text-2xl font-bold">AdSpot</span>
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            <a
              href="#"
              className="group flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              <span>All Categories</span>
              <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
            </a>
            <a
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Locations
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden md:inline-flex">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <Button
            variant="outline"
            className="hidden text-accent-foreground hover:bg-accent/90 hover:text-accent-foreground md:inline-flex"
            asChild
          >
            <a href="#">Login / Sign Up</a>
          </Button>
          <Button asChild>
            <a href="#">
              <PlusCircle className="mr-2 h-5 w-5" />
              Post Ad
            </a>
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
                  <a href="/" className="mb-8 flex items-center gap-2">
                     <PlusCircle className="h-8 w-8 text-primary" />
                    <span className="font-headline text-2xl font-bold">
                      AdSpot
                    </span>
                  </a>
                </SheetHeader>
                <nav className="flex flex-col gap-4">
                  <a
                    href="#"
                    className="text-lg font-medium text-muted-foreground hover:text-foreground"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    All Categories
                  </a>
                  <a
                    href="#"
                    className="text-lg font-medium text-muted-foreground hover:text-foreground"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Locations
                  </a>
                  <a
                    href="#"
                    className="text-lg font-medium text-muted-foreground hover:text-foreground"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Login / Sign Up
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
