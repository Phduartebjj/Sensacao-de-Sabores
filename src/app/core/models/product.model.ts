export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  flavor: string;
  image: string[];
  category: ProductCategory;
  badge?: ProductBadge;
}

export type ProductBadge = 'Novo' | 'Destaque';

export type ProductCategory = 'bolos' | 'empadas' | 'doces';

export type SortOptions = 'relevant' | 'price-asc' | 'price-desc';
