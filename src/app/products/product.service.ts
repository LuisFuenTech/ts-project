import { faker } from '@faker-js/faker';

import { IProduct } from './product.model';
import { CreateProductDto } from './product.dto';

export const products: IProduct[] = [];

export const addProduct = (data: CreateProductDto): IProduct => {
  const newProduct = {
    ...data,
    id: faker.string.uuid(),
    createdAt: new Date(),
    updatedAt: new Date(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  };

  products.push(newProduct);

  return newProduct;
};

export const updateProduct = (id: string, changes: CreateProductDto) => {};
