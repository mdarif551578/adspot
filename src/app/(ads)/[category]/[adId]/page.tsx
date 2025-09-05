import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  Tag,
  Eye,
  Heart,
  Share2,
  AlertTriangle,
} from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

import type { Ad } from '@/types';
import { ads } from '@/lib/mock-data';
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
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import AdCard from '@/components/shared/ad-card';

export default function AdDetailPage({
  params,
}: {
  params: { adId: string };
}) {
  const ad = ads.find((a) => a.id === params.adId);

  if (!ad) {
    notFound();
  }

  const relatedAds = ads.filter(
    (a) => a.category === ad.category && a.id !== ad.id
  );

  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Navbar />
      <main className="flex-1 py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <Badge variant="secondary" className="mb-2">
                        {ad.category}
                      </Badge>
                      <CardTitle className="font-headline text-2xl md:text-3xl">
                        {ad.title}
                      </CardTitle>
                      <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{ad.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>
                            Posted{' '}
                            {formatDistanceToNow(new Date(ad.createdAt), {
                              addSuffix: true,
                            })}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          <span>{ad.views} views</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon">
                        <Share2 className="h-5 w-5" />
                        <span className="sr-only">Share</span>
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Heart className="h-5 w-5" />
                        <span className="sr-only">Favorite</span>
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Carousel className="mb-6 w-full">
                    <CarouselContent>
                      {ad.images.map((img, index) => (
                        <CarouselItem key={index}>
                          <Image
                            src={img}
                            alt={`${ad.title} image ${index + 1}`}
                            width={800}
                            height={600}
                            className="aspect-video w-full rounded-lg object-cover"
                            data-ai-hint="product image"
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                  </Carousel>

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-headline text-xl font-semibold">
                        Price
                      </h3>
                      <p className="mt-1 text-3xl font-bold text-primary">
                        ৳{ad.price.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-headline text-xl font-semibold">
                        Description
                      </h3>
                      <p className="mt-2 whitespace-pre-wrap text-muted-foreground">
                        {ad.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline">Seller Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={ad.user.avatarUrl} alt={ad.user.name} />
                      <AvatarFallback>
                        {ad.user.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{ad.user.name}</p>
                      <p className="text-sm text-muted-foreground">
                        Member since{' '}
                        {new Date(ad.user.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <Button className="w-full">
                      <MessageCircle className="mr-2" /> Send Message
                    </Button>
                    <Button variant="secondary" className="w-full">
                      <Phone className="mr-2" /> Show Phone Number
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline">Safety Tips</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <ul className="space-y-2">
                    <li>Meet in a public place.</li>
                    <li>Verify the item before paying.</li>
                    <li>Avoid wiring money.</li>
                  </ul>
                  <Button variant="link" className="mt-2 px-0">
                    <AlertTriangle className="mr-2" /> Report this ad
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
          {relatedAds.length > 0 && (
            <div className="mt-12">
              <h2 className="font-headline text-2xl font-semibold md:text-3xl">
                Related Ads
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {relatedAds.map((relatedAd) => (
                  <AdCard key={relatedAd.id} ad={relatedAd} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
