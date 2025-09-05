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
import type { Ad, Category, User } from '@/types';

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

const mockUsers: User[] = [
    {
        id: 'user-1',
        email: 'john.doe@example.com',
        name: 'John Doe',
        phone: '123-456-7890',
        location: 'Dhaka',
        role: 'USER',
        avatarUrl: 'https://i.pravatar.cc/150?u=user-1',
        createdAt: new Date('2023-01-15').toISOString(),
    },
    {
        id: 'user-2',
        email: 'jane.smith@example.com',
        name: 'Jane Smith',
        phone: '098-765-4321',
        location: 'Chattogram',
        role: 'USER',
        avatarUrl: 'https://i.pravatar.cc/150?u=user-2',
        createdAt: new Date('2022-11-20').toISOString(),
    }
];

export const ads: Ad[] = [
  {
    id: '1',
    title: 'Slightly Used iPhone 14 Pro, 256GB, Deep Purple',
    description:
      'Selling my iPhone 14 Pro, 256GB in Deep Purple. The phone is in excellent condition with 98% battery health. No scratches or dents. Comes with original box and cable. Only selling because I upgraded to the new model. Serious buyers only.',
    price: 950,
    category: 'Electronics',
    subcategory: 'Mobile Phones',
    location: 'Dhaka',
    images: ['https://picsum.photos/800/600?random=1', 'https://picsum.photos/800/600?random=111'],
    status: 'ACTIVE',
    views: 128,
    userId: 'user-1',
    user: mockUsers[0],
    createdAt: new Date('2024-07-20T10:00:00Z').toISOString(),
    updatedAt: new Date('2024-07-20T10:00:00Z').toISOString(),
  },
  {
    id: '2',
    title: '2018 Toyota Axio Hybrid - Mint Condition',
    description:
      'A very well-maintained 2018 Toyota Axio Hybrid. Low mileage, automatic transmission, push start. All papers are up to date. The car feels and drives like new. Perfect for city driving and family use. Fuel efficient hybrid engine.',
    price: 18500,
    category: 'Vehicles',
    location: 'Chattogram',
    images: ['https://picsum.photos/800/600?random=2'],
    status: 'ACTIVE',
    views: 256,
    userId: 'user-2',
    user: mockUsers[1],
    createdAt: new Date('2024-07-19T15:30:00Z').toISOString(),
    updatedAt: new Date('2024-07-19T15:30:00Z').toISOString(),
  },
  {
    id: '3',
    title: 'Senior React Developer Needed - Remote',
    description:
      'We are looking for an experienced Senior React Developer to join our remote team. Must have 5+ years of experience with React, Next.js, and TypeScript. Strong understanding of state management and component architecture is required. Competitive salary and benefits.',
    price: 80000,
    category: 'Jobs',
    location: 'Remote',
    images: ['https://picsum.photos/800/600?random=3'],
    status: 'ACTIVE',
    views: 312,
    userId: 'user-1',
    user: mockUsers[0],
    createdAt: new Date('2024-07-18T09:00:00Z').toISOString(),
    updatedAt: new Date('2024-07-18T09:00:00Z').toISOString(),
  },
  {
    id: '4',
    title: '2-Bedroom Apartment for Rent in Gulshan',
    description:
      'Spacious 1200 sq. ft. 2-bedroom, 2-bathroom apartment available for rent in a prime location in Gulshan 1. Features include a modern kitchen, balcony, and 24/7 security. Ideal for small families or working professionals.',
    price: 450,
    category: 'Properties',
    location: 'Dhaka',
    images: ['https://picsum.photos/800/600?random=4'],
    status: 'ACTIVE',
    views: 98,
    userId: 'user-2',
    user: mockUsers[1],
    createdAt: new Date('2024-07-17T18:00:00Z').toISOString(),
    updatedAt: new Date('2024-07-17T18:00:00Z').toISOString(),
  },
  {
    id: '5',
    title: 'Sony WH-1000XM5 Noise Cancelling Headphones',
    description:
      'Almost new Sony WH-1000XM5 headphones. Unbeatable noise cancellation and superb sound quality. Used only a few times. Comes with the full original packaging. Selling because I prefer in-ear buds for travel.',
    price: 300,
    category: 'Electronics',
    location: 'Sylhet',
    images: ['https://picsum.photos/800/600?random=5'],
    status: 'SOLD',
    views: 450,
    userId: 'user-1',
    user: mockUsers[0],
    createdAt: new Date('2024-07-16T11:45:00Z').toISOString(),
    updatedAt: new Date('2024-07-21T12:00:00Z').toISOString(),
  },
  // ... more ads
];
