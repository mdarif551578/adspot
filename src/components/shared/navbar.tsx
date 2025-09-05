'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, Search, ChevronDown, PlusCircle, User } from 'lucide-react';
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
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { categories } from '@/lib/mock-data';
import { Separator } from '../ui/separator';

// This is a placeholder for session logic
const useSession = () => ({ data: null }); // or { data: { user: { name: 'John' } } }

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { data: session } = useSession();

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
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="hidden md:inline-flex"
            asChild
          >
            <Link href="/search">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Link>
          </Button>
          {session ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="secondary" className="hidden md:inline-flex">
                    <User className="mr-2" />
                    My Account
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem asChild><Link href="/profile">Profile</Link></DropdownMenuItem>
                    <DropdownMenuItem asChild><Link href="/my-ads">My Ads</Link></DropdownMenuItem>
                    <DropdownMenuItem asChild><Link href="/messages">Messages</Link></DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
          ) : (
             <Button
                variant="outline"
                className="hidden hover:bg-accent hover:text-accent-foreground md:inline-flex"
                asChild
              >
              <Link href="/login">Login / Sign Up</Link>
            </Button>
          )}
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
              <SheetContent side="left" className="pr-0">
                 <SheetHeader>
                   <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                   <Link
                    href="/"
                    className="mb-4 flex items-center gap-2 pr-6"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <PlusCircle className="h-8 w-8 text-primary" />
                    <span className="font-headline text-2xl font-bold">
                      AdSpot
                    </span>
                  </Link>
                </SheetHeader>
                <Separator />
                <div className="mt-4 flex h-full flex-col">
                  <nav className="flex flex-1 flex-col gap-2 pr-6">
                    <Link
                      href="/search"
                      className="rounded-lg px-3 py-2 text-lg font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Search
                    </Link>
                    <div>
                      <h3 className="px-3 text-lg font-semibold text-foreground">
                        My Account
                      </h3>
                       <div className="flex flex-col gap-1">
                         <Link href="/profile" className="rounded-lg px-3 py-2 font-medium text-muted-foreground hover:bg-accent hover:text-foreground" onClick={() => setIsMobileMenuOpen(false)}>Profile</Link>
                         <Link href="/my-ads" className="rounded-lg px-3 py-2 font-medium text-muted-foreground hover:bg-accent hover:text-foreground" onClick={() => setIsMobileMenuOpen(false)}>My Ads</Link>
                         <Link href="/messages" className="rounded-lg px-3 py-2 font-medium text-muted-foreground hover:bg-accent hover:text-foreground" onClick={() => setIsMobileMenuOpen(false)}>Messages</Link>
                       </div>
                    </div>
                     <div>
                      <h3 className="px-3 text-lg font-semibold text-foreground">
                        Categories
                      </h3>
                      <div className="flex flex-col gap-1">
                        {categories.map((cat) => (
                          <Link
                            key={cat.name}
                            href={`/${cat.name.toLowerCase()}`}
                            className="rounded-lg px-3 py-2 font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {cat.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </nav>
                  <Separator />
                  <div className="mt-4 flex flex-col gap-2 pr-6">
                    <Link
                      href="/login"
                      className="rounded-lg px-3 py-2 text-lg font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Login / Sign Up
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
