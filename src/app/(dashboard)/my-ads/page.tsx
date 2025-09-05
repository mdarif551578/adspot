'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PlusCircle, Edit, Trash2, Eye, MoreVertical, Archive } from 'lucide-react';

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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ads as allAds } from '@/lib/mock-data';
import Image from 'next/image';

// This is a placeholder for the logged-in user's ads.
// In a real application, this would come from an API call filtered by user ID.
const myAds = allAds.slice(0, 4); 

export default function MyAdsPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Navbar />
      <main className="flex-1 py-12 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <Card>
            <CardHeader>
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <CardTitle className="font-headline text-2xl">My Ads</CardTitle>
                  <CardDescription>
                    Manage your active, pending, and sold advertisements.
                  </CardDescription>
                </div>
                <Link href="/post">
                  <Button>
                    <PlusCircle className="mr-2" /> Post a New Ad
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="hidden w-[100px] sm:table-cell">
                      Image
                    </TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="hidden md:table-cell">Price</TableHead>
                    <TableHead className="hidden md:table-cell">Views</TableHead>
                    <TableHead>
                      <span className="sr-only">Actions</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {myAds.map((ad) => (
                    <TableRow key={ad.id}>
                       <TableCell className="hidden sm:table-cell">
                        <Image
                          alt={ad.title}
                          className="aspect-square rounded-md object-cover"
                          height="64"
                          src={ad.images[0]}
                          width="64"
                          data-ai-hint="product image"
                        />
                      </TableCell>
                      <TableCell className="font-medium">{ad.title}</TableCell>
                      <TableCell>
                        <Badge variant={ad.status === 'SOLD' ? 'destructive' : 'secondary'}>{ad.status}</Badge>
                      </TableCell>
                       <TableCell className="hidden md:table-cell">৳{ad.price.toLocaleString()}</TableCell>
                      <TableCell className="hidden md:table-cell">{ad.views}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              aria-haspopup="true"
                              size="icon"
                              variant="ghost"
                            >
                              <MoreVertical className="h-4 w-4" />
                              <span className="sr-only">Toggle menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                             <DropdownMenuItem>
                                <Eye className="mr-2"/> View Ad
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Edit className="mr-2"/> Edit
                            </DropdownMenuItem>
                             <DropdownMenuItem>
                                <Archive className="mr-2"/> Mark as Sold
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">
                                <Trash2 className="mr-2"/> Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
