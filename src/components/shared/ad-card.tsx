import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Tag, Heart, Clock } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import type { Ad } from '@/types';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface AdCardProps {
  ad: Ad;
}

export default function AdCard({ ad }: AdCardProps) {
  const categorySlug = ad.category.toLowerCase();
  
  return (
    <Card className="flex h-full flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl">
      <CardHeader className="relative p-0">
        <Link href={`/${categorySlug}/${ad.id}`} className="block">
          <Image
            src={ad.images[0]}
            alt={ad.title}
            width={400}
            height={300}
            className="aspect-video w-full object-cover"
            data-ai-hint="product photo"
          />
        </Link>
        {ad.isFeatured && (
           <Badge className="absolute left-2 top-2 bg-accent text-accent-foreground">
             Featured
           </Badge>
        )}
        {ad.status === 'SOLD' && (
          <Badge
            variant="destructive"
            className="absolute left-2 top-2"
          >
            Sold
          </Badge>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 h-8 w-8 rounded-full bg-card/70 text-card-foreground backdrop-blur-sm hover:bg-card"
        >
          <Heart className="h-4 w-4" />
          <span className="sr-only">Favorite</span>
        </Button>
      </CardHeader>
      <CardContent className="flex-1 p-4">
        <Link href={`/${categorySlug}/${ad.id}`}>
          <CardTitle className="mb-2 line-clamp-2 h-14 font-headline text-lg font-semibold leading-tight hover:text-primary">
            {ad.title}
          </CardTitle>
        </Link>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>{ad.location}</span>
        </div>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 p-4 pt-0">
        <div className="flex w-full items-center justify-between">
           <div className="flex items-center font-bold text-primary">
            <Tag className="mr-2 h-5 w-5" />
            <span className="text-xl">
              ৳{ad.price.toLocaleString('en-US')}
            </span>
          </div>
          <Badge variant="secondary">{ad.category}</Badge>
        </div>
         <div className="flex items-center text-xs text-muted-foreground">
            <Clock className="mr-1 h-3 w-3" />
            <span>{formatDistanceToNow(new Date(ad.createdAt), { addSuffix: true })}</span>
        </div>
      </CardFooter>
    </Card>
  );
}
