import { addProduct } from './products/product.service';

addProduct({
  id: 1,
  title: 'macbook',
  createdAt: new Date(),
  updatedAt: new Date(),
  stock: 90,
  category: {
    id: 1,
    name: 'tech',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
});
