'use client';

import Link from 'next/link';
import Navbar from '@/components/shared/navbar';
import Footer from '@/components/shared/footer';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Navbar />
      <main className="flex-1 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-headline text-4xl font-bold md:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              We'd love to hear from you! Whether you have a question,
              feedback, or need assistance, our team is here to help.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="flex flex-col items-center p-6 text-center">
              <Mail className="h-10 w-10 text-primary" />
              <h3 className="mt-4 font-headline text-xl font-semibold">
                Email Us
              </h3>
              <p className="mt-2 text-muted-foreground">
                For general inquiries and support.
              </p>
              <a
                href="mailto:support@adspot.com"
                className="mt-4 text-primary hover:underline"
              >
                support@adspot.com
              </a>
            </Card>
            <Card className="flex flex-col items-center p-6 text-center">
              <Phone className="h-10 w-10 text-primary" />
              <h3 className="mt-4 font-headline text-xl font-semibold">
                Call Us
              </h3>
              <p className="mt-2 text-muted-foreground">
                Available Mon-Fri, 9am-5pm.
              </p>
              <a href="tel:+123456789" className="mt-4 text-primary hover:underline">
                +1 (234) 567-89
              </a>
            </Card>
            <Card className="flex flex-col items-center p-6 text-center lg:col-span-1">
              <MapPin className="h-10 w-10 text-primary" />
              <h3 className="mt-4 font-headline text-xl font-semibold">
                Our Office
              </h3>
              <p className="mt-2 text-muted-foreground">
                123 Market Street, Suite 456, Dhaka, Bangladesh
              </p>
              <a
                href="#"
                className="mt-4 text-primary hover:underline"
                onClick={(e) => e.preventDefault()}
              >
                Get Directions
              </a>
            </Card>
          </div>

          <Card className="mx-auto mt-12 max-w-4xl">
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as
                possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your Name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Your Email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Message Subject" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Type your message here..."
                  />
                </div>
                <Button type="submit" className="w-full">
                  <Send className="mr-2" /> Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
