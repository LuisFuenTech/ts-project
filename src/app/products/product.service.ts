import { faker } from '@faker-js/faker';

import { IProduct } from './product.model';
import {
  CreateProductDto,
  FindProductDto,
  UpdateProductDto,
} from './product.dto';

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

export const updateProduct = (
  id: string | number,
  changes: UpdateProductDto
): IProduct => {
  const index = products.findIndex((item) => item.id === id);
  const previousData = products[index];
  products[index] = {
    ...previousData,
    ...changes,
  };

  return products[index];
};

export const findProducts = (dto: FindProductDto): IProduct[] => {
  return products;
};
