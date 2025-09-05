import {
  Smartphone,
  Car,
  Briefcase,
  Home,
  ShoppingBag,
  Wrench,
  HeartHandshake,
  Dog,
} from 'lucide-react';
import type { Ad, Category } from '@/types';

export const categories: Category[] = [
  { name: 'Electronics', icon: Smartphone },
  { name: 'Vehicles', icon: Car },
  { name: 'Jobs', icon: Briefcase },
  { name: 'Properties', icon: Home },
  { name: 'For Sale', icon: ShoppingBag },
  { name: 'Services', icon: Wrench },
  { name: 'Community', icon: HeartHandshake },
  { name: 'Pets', icon: Dog },
];

export const ads: Ad[] = [
  {
    id: '1',
    title: 'Slightly Used iPhone 14 Pro, 256GB, Deep Purple',
    description:
      'Selling my iPhone 14 Pro, 256GB in Deep Purple. The phone is in excellent condition with 98% battery health. No scratches or dents. Comes with original box and cable. Only selling because I upgraded to the new model. Serious buyers only.',
    price: 950,
    category: 'Electronics',
    location: 'Dhaka',
    imageUrl: 'https://picsum.photos/400/300?random=1',
    isFeatured: true,
  },
  {
    id: '2',
    title: '2018 Toyota Axio Hybrid - Mint Condition',
    description:
      'A very well-maintained 2018 Toyota Axio Hybrid. Low mileage, automatic transmission, push start. All papers are up to date. The car feels and drives like new. Perfect for city driving and family use. Fuel efficient hybrid engine.',
    price: 18500,
    category: 'Vehicles',
    location: 'Chattogram',
    imageUrl: 'https://picsum.photos/400/300?random=2',
    isFeatured: true,
  },
  {
    id: '3',
    title: 'Senior React Developer Needed - Remote',
    description:
      'We are looking for an experienced Senior React Developer to join our remote team. Must have 5+ years of experience with React, Next.js, and TypeScript. Strong understanding of state management and component architecture is required. Competitive salary and benefits.',
    price: 80000,
    category: 'Jobs',
    location: 'Remote',
    imageUrl: 'https://picsum.photos/400/300?random=3',
    isFeatured: false,
  },
  {
    id: '4',
    title: '2-Bedroom Apartment for Rent in Gulshan',
    description:
      'Spacious 1200 sq. ft. 2-bedroom, 2-bathroom apartment available for rent in a prime location in Gulshan 1. Features include a modern kitchen, balcony, and 24/7 security. Ideal for small families or working professionals.',
    price: 450,
    category: 'Properties',
    location: 'Dhaka',
    imageUrl: 'https://picsum.photos/400/300?random=4',
    isFeatured: true,
  },
  {
    id: '5',
    title: 'Sony WH-1000XM5 Noise Cancelling Headphones',
    description:
      'Almost new Sony WH-1000XM5 headphones. Unbeatable noise cancellation and superb sound quality. Used only a few times. Comes with the full original packaging. Selling because I prefer in-ear buds for travel.',
    price: 300,
    category: 'Electronics',
    location: 'Sylhet',
    imageUrl: 'https://picsum.photos/400/300?random=5',
    isFeatured: false,
  },
  {
    id: '6',
    title: 'Professional Graphic Design Services',
    description:
      'Offering professional graphic design services for logos, brochures, social media posts, and more. With over 8 years of experience, I can help your brand stand out. Fast turnaround and affordable prices. Contact for a custom quote.',
    price: 50,
    category: 'Services',
    location: 'Online',
    imageUrl: 'https://picsum.photos/400/300?random=6',
    isFeatured: false,
  },
  {
    id: '7',
    title: 'Adorable Persian Kitten for Adoption',
    description:
      'Looking for a loving home for our 3-month-old Persian kitten. He is very playful, litter-trained, and loves to cuddle. We are moving and unfortunately cannot take him with us. Small adoption fee to ensure a good home.',
    price: 100,
    category: 'Pets',
    location: 'Khulna',
    imageUrl: 'https://picsum.photos/400/300?random=7',
    isFeatured: false,
  },
  {
    id: '8',
    title: 'IKEA Wardrobe - Good as New',
    description:
      'White IKEA PAX wardrobe with two doors. Plenty of storage space with shelves and a hanging rail. In great condition, no visible marks. Dimensions: 100x60x201 cm. Buyer must arrange for pickup and transport.',
    price: 150,
    category: 'For Sale',
    location: 'Dhaka',
    imageUrl: 'https://picsum.photos/400/300?random=8',
    isFeatured: false,
  },
    {
    id: '9',
    title: 'Samsung 4K Smart TV 55 Inch - 2022 Model',
    description:
      'Selling my 55-inch Samsung Crystal UHD 4K Smart TV. It has a beautiful picture and all the smart features you need like Netflix, YouTube, etc. No issues at all, just upgrading to a larger size. Model AU8000. Includes remote and stand.',
    price: 550,
    category: 'Electronics',
    location: 'Chattogram',
    imageUrl: 'https://picsum.photos/400/300?random=9',
    isFeatured: true,
  },
  {
    id: '10',
    title: 'Honda CBR 150R ABS 2021 Model',
    description:
      'Selling my Honda CBR 150R with ABS. The bike is in pristine condition, with only 5000km on the odometer. Regularly serviced at authorized centers. All papers are up-to-date. No accidents. A great sports bike for enthusiasts.',
    price: 4800,
    category: 'Vehicles',
    location: 'Dhaka',
    imageUrl: 'https://picsum.photos/400/300?random=10',
    isFeatured: false,
  },
  {
    id: '11',
    title: 'Marketing Manager Position at a Startup',
    description:
      'A fast-growing tech startup is looking for a dynamic Marketing Manager. You will be responsible for developing and executing marketing strategies. Experience in digital marketing, SEO, and content creation is a must. Great opportunity for growth.',
    price: 65000,
    category: 'Jobs',
    location: 'Dhaka',
    imageUrl: 'https://picsum.photos/400/300?random=11',
    isFeatured: false,
  },
  {
    id: '12',
    title: 'Commercial Space for Rent in Motijheel',
    description:
      '800 sq. ft. commercial space available on the ground floor in a busy area of Motijheel. Perfect for an office, showroom, or bank. High foot traffic. Available for long-term lease. Contact for viewing and details.',
    price: 1000,
    category: 'Properties',
    location: 'Dhaka',
    imageUrl: 'https://picsum.photos/400/300?random=12',
    isFeatured: true,
  },
];
