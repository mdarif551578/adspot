import type { Category } from '@/types';
import { Card, CardContent } from '@/components/ui/card';

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const Icon = category.icon;
  return (
    <a href="#" className="group block">
      <Card className="h-full transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
        <CardContent className="flex flex-col items-center justify-center gap-2 p-4 text-center">
          <div className="rounded-full bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            <Icon className="h-8 w-8" />
          </div>
          <span className="text-sm font-medium text-foreground">
            {category.name}
          </span>
        </CardContent>
      </Card>
    </a>
  );
}
