import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <h3 className="font-headline text-2xl font-bold text-primary">
              AdSpot
            </h3>
            <p className="mt-2 text-muted-foreground">
              Your one-stop marketplace for buying and selling.
            </p>
            <div className="mt-4 flex space-x-2">
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          <div>
            <h4 className="font-headline font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/search" className="text-muted-foreground hover:text-primary">
                  All Ads
                </Link>
              </li>
              <li>
                <Link href="/post" className="text-muted-foreground hover:text-primary">
                  Post an Ad
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-muted-foreground hover:text-primary">
                  My Account
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline font-semibold">About</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline font-semibold">Support</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Help/FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Safety Tips
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AdSpot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
