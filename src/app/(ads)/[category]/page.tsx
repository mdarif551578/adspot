import { notFound } from 'next/navigation';
import {
  ListFilter,
  LayoutGrid,
  List,
  ChevronDown,
} from 'lucide-react';

import { ads, categories } from '@/lib/mock-data';
import Navbar from '@/components/shared/navbar';
import Footer from '@/components/shared/footer';
import AdCard from '@/components/shared/ad-card';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';


export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const category = categories.find(
    (c) => c.name.toLowerCase() === params.category
  );

  if (!category) {
    notFound();
  }

  const filteredAds = ads.filter(
    (ad) => ad.category.toLowerCase() === params.category
  );

  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{category.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <aside className="md:col-span-1">
              <h3 className="mb-4 font-headline text-lg font-semibold">
                <ListFilter className="mr-2 inline-block" />
                Filters
              </h3>
              <Accordion type="multiple" defaultValue={['price', 'location']} className="w-full">
                <AccordionItem value="subcategories">
                  <AccordionTrigger>Subcategories</AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="phones" />
                      <Label htmlFor="phones">Mobile Phones</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="laptops" />
                      <Label htmlFor="laptops">Laptops</Label>
                    </div>
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
                <AccordionItem value="location">
                  <AccordionTrigger>Location</AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="dhaka-loc" />
                      <Label htmlFor="dhaka-loc">Dhaka</Label>
                    </div>
                     <div className="flex items-center space-x-2">
                      <Checkbox id="chattogram-loc" />
                      <Label htmlFor="chattogram-loc">Chattogram</Label>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="condition">
                  <AccordionTrigger>Condition</AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="new" />
                      <Label htmlFor="new">New</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="used" />
                      <Label htmlFor="used">Used</Label>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </aside>
            <div className="md:col-span-3">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-sm text-muted-foreground">Showing {filteredAds.length} ads</p>
                <div className="flex items-center gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline">
                        Sort by: Newest <ChevronDown className="ml-2" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Newest</DropdownMenuItem>
                      <DropdownMenuItem>Price: Low to High</DropdownMenuItem>
                      <DropdownMenuItem>Price: High to Low</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Button variant="outline" size="icon">
                    <LayoutGrid />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <List />
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filteredAds.map((ad) => (
                  <AdCard key={ad.id} ad={ad} />
                ))}
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
                    <PaginationLink href="#" isActive>2</PaginationLink>
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
