import Image from 'next/image';
import { MapPin, Tag, Heart } from 'lucide-react';
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
  return (
    <Card className="flex h-full flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl">
      <CardHeader className="relative p-0">
        <a href="#" className="block">
          <Image
            src={ad.imageUrl}
            alt={ad.title}
            width={400}
            height={300}
            className="aspect-video w-full object-cover"
            data-ai-hint="product photo"
          />
        </a>
        {ad.isFeatured && (
          <Badge
            variant="default"
            className="absolute left-2 top-2 bg-primary text-primary-foreground"
          >
            Featured
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
        <a href="#">
          <CardTitle className="mb-2 line-clamp-2 h-14 font-headline text-lg font-semibold leading-tight hover:text-primary">
            {ad.title}
          </CardTitle>
        </a>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>{ad.location}</span>
        </div>
        <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{ad.description}</p>
      </CardContent>
      <CardFooter className="flex-col items-start p-4 pt-0">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center font-bold text-primary">
            <Tag className="mr-2 h-5 w-5" />
            <span className="text-xl">
              ${ad.price.toLocaleString('en-US')}
            </span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
