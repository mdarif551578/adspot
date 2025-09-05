import { ads, categories } from '@/lib/mock-data';
import Navbar from '@/components/shared/navbar';
import Footer from '@/components/shared/footer';
import AdCard from '@/components/shared/ad-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, MapPin, ListFilter } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';


export default function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const query = searchParams.q || '';
  const searchResults = query
    ? ads.filter(
        (ad) =>
          ad.title.toLowerCase().includes(query.toLowerCase()) ||
          ad.description.toLowerCase().includes(query.toLowerCase())
      )
    : ads;

  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8 flex flex-col gap-4 rounded-lg border bg-card p-4 md:flex-row md:items-center">
             <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                defaultValue={query}
                placeholder="What are you looking for?"
                className="w-full border-0 bg-transparent pl-10 focus-visible:ring-0"
              />
            </div>
            <div className="relative flex-1">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Location"
                className="w-full border-0 bg-transparent pl-10 focus-visible:ring-0"
              />
            </div>
             <Button type="submit" size="lg" className="w-full md:w-auto">
              <Search className="mr-2" />
              Search
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
             <aside className="md:col-span-1">
              <h3 className="mb-4 font-headline text-lg font-semibold">
                <ListFilter className="mr-2 inline-block" />
                Filters
              </h3>
              <Accordion type="multiple" defaultValue={['category', 'price']} className="w-full">
                <AccordionItem value="category">
                  <AccordionTrigger>Category</AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    {categories.map(cat => (
                         <div key={cat.name} className="flex items-center space-x-2">
                            <Checkbox id={`cat-${cat.name.toLowerCase()}`} />
                            <Label htmlFor={`cat-${cat.name.toLowerCase()}`}>{cat.name}</Label>
                        </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="price">
                  <AccordionTrigger>Price Range</AccordionTrigger>
                  <AccordionContent className="space-y-4">
                    <Slider
                      defaultValue={[0, 50000]}
                      max={100000}
                      step={100}
                    />
                    <div className="flex justify-between">
                      <Input type="number" placeholder="Min" className="w-24" />
                      <Input type="number" placeholder="Max" className="w-24" />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </aside>
            <div className="md:col-span-3">
              <h2 className="font-headline text-2xl font-semibold">
                {query ? `Results for "${query}"` : 'All Ads'}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Found {searchResults.length} matching ads.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {searchResults.length > 0 ? (
                  searchResults.map((ad) => <AdCard key={ad.id} ad={ad} />)
                ) : (
                  <p>No results found.</p>
                )}
              </div>
                <Pagination className="mt-8">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
