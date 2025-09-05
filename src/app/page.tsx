import Image from 'next/image';
import {
  Search,
  MapPin,
  ChevronRight,
  Sparkles,
  Tag,
  Heart,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card } from '@/components/ui/card';
import Navbar from '@/components/shared/navbar';
import Footer from '@/components/shared/footer';
import CategoryCard from '@/components/shared/category-card';
import AdCard from '@/components/shared/ad-card';
import { categories, ads } from '@/lib/mock-data';

export default function Home() {
  const featuredAds = ads.filter((ad) => ad.isFeatured);
  const recentAds = ads.filter((ad) => !ad.isFeatured);

  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <CategoriesSection />
        <FeaturedAdsSection ads={featuredAds} />
        <RecentAdsSection ads={recentAds} />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative bg-card py-20 md:py-32">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('https://picsum.photos/1600/800')" }}
        data-ai-hint="abstract background"
      ></div>
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground md:text-6xl">
          Find Your Next Great Deal
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          The best place to buy and sell everything from cars to mobile phones,
          find a job, or rent a property.
        </p>
        <form className="mx-auto mt-8 max-w-2xl">
          <Card className="flex flex-col gap-2 rounded-lg p-2 shadow-lg sm:flex-row md:p-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="What are you looking for?"
                className="w-full border-0 bg-transparent pl-10 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
            <div className="hidden h-10 w-px bg-border sm:block"></div>
            <div className="relative flex-1">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Select>
                <SelectTrigger className="w-full border-0 bg-transparent pl-10 focus:ring-0 focus:ring-offset-0">
                  <SelectValue placeholder="All Locations" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dhaka">Dhaka</SelectItem>
                  <SelectItem value="chattogram">Chattogram</SelectItem>
                  <SelectItem value="sylhet">Sylhet</SelectItem>
                  <SelectItem value="khulna">Khulna</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" size="lg" className="w-full sm:w-auto">
              <Search className="mr-2" />
              Search
            </Button>
          </Card>
        </form>
      </div>
    </section>
  );
}

function CategoriesSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="font-headline text-2xl font-semibold md:text-3xl">
            Browse by Category
          </h2>
          <Button variant="ghost" asChild>
            <a href="#">
              See All <ChevronRight className="ml-1" />
            </a>
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
          {categories.map((category) => (
            <CategoryCard key={category.name} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedAdsSection({ ads }: { ads: typeof import('@/lib/mock-data').ads }) {
  return (
    <section className="bg-card py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="font-headline text-2xl font-semibold md:text-3xl">
            <Sparkles className="mr-2 inline-block text-primary" />
            Featured Ads
          </h2>
          <Button variant="ghost" asChild>
            <a href="#">
              See All <ChevronRight className="ml-1" />
            </a>
          </Button>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {ads.map((ad) => (
              <CarouselItem
                key={ad.id}
                className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <div className="p-1">
                  <AdCard ad={ad} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}

function RecentAdsSection({ ads }: { ads: typeof import('@/lib/mock-data').ads }) {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="font-headline text-2xl font-semibold md:text-3xl">
            Fresh Recommendations
          </h2>
          <Button variant="ghost" asChild>
            <a href="#">
              See All <ChevronRight className="ml-1" />
            </a>
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {ads.map((ad) => (
            <AdCard key={ad.id} ad={ad} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section className="bg-primary/10 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-6 rounded-lg bg-card p-8 shadow-md md:flex-row">
          <div className="text-center md:text-left">
            <h3 className="font-headline text-2xl font-bold text-foreground">
              Ready to sell?
            </h3>
            <p className="mt-2 text-muted-foreground">
              Post your ad on AdSpot and reach thousands of potential buyers.
            </p>
          </div>
          <Button size="lg" className="shrink-0" asChild>
            <a href="/post">
              Post Your Ad for Free
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
