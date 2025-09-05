import type { LucideIcon } from 'lucide-react';

export type Role = 'USER' | 'ADMIN' | 'MODERATOR';
export type AdStatus = 'ACTIVE' | 'SOLD' | 'DELETED' | 'PENDING_REVIEW';
export type CategoryName =
  | 'Electronics'
  | 'Vehicles'
  | 'Jobs'
  | 'Properties'
  | 'Services'
  | 'For Sale'
  | 'Community'
  | 'Pets';

export interface User {
  id: string;
  email: string;
  password?: string; // Hashed
  name: string;
  phone?: string;
  location?: string;
  role: Role;
  avatarUrl?: string;
  createdAt: string; // ISO 8601 date string
}

export interface Ad {
  id: string;
  title: string;
  description: string;
  price: number;
  category: CategoryName;
  subcategory?: string;
  location: string;
  images: string[]; // Array of URLs
  status: AdStatus;
  views: number;
  userId: string;
  user: User;
  createdAt: string; // ISO 8601 date string
  updatedAt: string; // ISO 8601 date string
}

export interface Message {
  id: string;
  content: string;
  senderId: string;
  receiverId: string;
  adId?: string;
  createdAt: string; // ISO 8601 date string
}


export interface Category {
  name: CategoryName;
  icon: LucideIcon;
}
