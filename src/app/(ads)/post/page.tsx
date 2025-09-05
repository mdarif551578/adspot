'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  ChevronLeft,
  ChevronRight,
  UploadCloud,
  X,
  PlusCircle,
} from 'lucide-react';

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
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';

const adSchema = z.object({
  category: z.string().min(1, 'Category is required'),
  subcategory: z.string().optional(),
  title: z.string().min(5, 'Title must be at least 5 characters'),
  description: z.string().max(2000, 'Description is too long'),
  price: z.coerce.number().positive('Price must be a positive number'),
  location: z.string().min(1, 'Location is required'),
});

type AdFormValues = z.infer<typeof adSchema>;

const STEPS = [
  { id: 1, name: 'Category' },
  { id: 2, name: 'Details' },
  { id: 3, name: 'Images' },
  { id: 4, name: 'Review' },
];

export default function PostAdPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [images, setImages] = useState<File[]>([]);

  const form = useForm<AdFormValues>({
    resolver: zodResolver(adSchema),
    defaultValues: {
      title: '',
      description: '',
      location: '',
    },
  });

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  function onSubmit(data: AdFormValues) {
    console.log(data);
    nextStep();
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setImages((prev) => [...prev, ...files].slice(0, 10));
    }
  };
  
  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Navbar />
      <main className="flex-1 py-8 md:py-12">
        <div className="container mx-auto max-w-4xl px-4">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl md:text-3xl">
                Post Your Ad
              </CardTitle>
              <CardDescription>
                Fill out the details below to publish your advertisement.
              </CardDescription>
              <Progress value={(currentStep / STEPS.length) * 100} className="mt-4" />
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  {currentStep === 1 && (
                    <div className="space-y-4">
                      <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Category</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a category" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="electronics">
                                  Electronics
                                </SelectItem>
                                <SelectItem value="vehicles">
                                  Vehicles
                                </SelectItem>
                                <SelectItem value="jobs">Jobs</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                       <FormField
                        control={form.control}
                        name="subcategory"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subcategory</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a subcategory" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="mobile-phones">
                                  Mobile Phones
                                </SelectItem>
                                <SelectItem value="laptops">
                                  Laptops
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="space-y-4">
                       <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Ad Title</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., Slightly used iPhone 14 Pro" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                       <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                              <Textarea rows={6} placeholder="Describe your item in detail..." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                       <FormField
                        control={form.control}
                        name="price"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Price ($)</FormLabel>
                            <FormControl>
                              <Input type="number" placeholder="Enter price" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                       <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Location</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., Dhaka, Bangladesh" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  )}
                  
                  {currentStep === 3 && (
                    <div className="space-y-4">
                        <FormLabel>Upload Images (up to 10)</FormLabel>
                        <FormControl>
                            <div className="flex h-32 items-center justify-center rounded-md border-2 border-dashed border-input bg-background">
                                <label htmlFor="image-upload" className="flex cursor-pointer flex-col items-center gap-2 text-muted-foreground">
                                    <UploadCloud />
                                    <span>Drag & drop or click to upload</span>
                                </label>
                                <Input id="image-upload" type="file" multiple accept="image/*" className="hidden" onChange={handleImageUpload} />
                            </div>
                        </FormControl>
                         {images.length > 0 && (
                            <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
                                {images.map((file, index) => (
                                    <div key={index} className="relative">
                                        <img src={URL.createObjectURL(file)} alt={`preview ${index}`} className="h-24 w-full rounded-md object-cover" />
                                        <Button
                                            type="button"
                                            variant="destructive"
                                            size="icon"
                                            className="absolute -right-2 -top-2 h-6 w-6 rounded-full"
                                            onClick={() => removeImage(index)}
                                        >
                                            <X className="h-4 w-4" />
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                  )}
                  
                  {currentStep === 4 && (
                    <div className="space-y-6">
                        <h3 className="font-headline text-xl">Review Your Ad</h3>
                        <div className="rounded-md border p-4">
                            <h4 className="font-semibold">{form.getValues('title')}</h4>
                            <p className="text-sm text-muted-foreground">{form.getValues('location')}</p>
                            <p className="mt-2 text-lg font-bold text-primary">${form.getValues('price')}</p>
                            <p className="mt-2 text-sm">{form.getValues('description')}</p>
                             {images.length > 0 && <p className="mt-2 text-sm font-medium">{images.length} images selected</p>}
                        </div>
                        <Button type="button" size="lg" className="w-full">
                           <PlusCircle className="mr-2" /> Publish Ad
                        </Button>
                    </div>
                  )}

                  <div className="mt-8 flex justify-between">
                    {currentStep > 1 && currentStep < 4 && (
                      <Button type="button" variant="outline" onClick={prevStep}>
                        <ChevronLeft className="mr-2" />
                        Back
                      </Button>
                    )}
                    {currentStep < 3 && (
                       <Button type="button" onClick={nextStep} className="ml-auto">
                        Next
                        <ChevronRight className="ml-2" />
                      </Button>
                    )}
                     {currentStep === 3 && (
                       <Button type="button" onClick={nextStep} className="ml-auto">
                        Review Ad
                        <ChevronRight className="ml-2" />
                      </Button>
                    )}
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
