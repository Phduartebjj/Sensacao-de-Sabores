import { Product } from './../models/product.model copy';

export const products: Product[] = [
  {
    id: crypto.randomUUID(),
    name: 'Bolo de Chocolate',
    description: 'Delicioso bolo de chocolate com cobertura cremosa.',
    price: 8.0,
    image: [
      'https://images.unsplash.com/photo-1603052875370-1e3f5b8c6f9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    ],
    category: 'bolos',
    badge: 'Novo',
  },
  {
    id: crypto.randomUUID(),
    name: 'Empada de Frango',
    description: 'Empada de frango com massa crocante e recheio suculento.',
    price: 5.0,
    image: [
      'https://images.unsplash.com/photo-1617196038820-1e3f5b8c6f9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    ],
    category: 'empadas',
    badge: 'Destaque',
  },
];
