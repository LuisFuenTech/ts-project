import { ICategory } from '../categories/category.model';

export type Sizes = 'S' | 'M' | 'L' | 'XL';

export interface IProduct {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
  category: ICategory;
}
