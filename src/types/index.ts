import type { LucideIcon } from 'lucide-react';

export interface Ad {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  location: string;
  imageUrl: string;
  isFeatured?: boolean;
}

export interface Category {
  name: string;
  icon: LucideIcon;
}
