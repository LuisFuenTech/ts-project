import { IBaseModel } from '../base.model';
import { ICategory } from '../categories/category.model';

export type Sizes = 'S' | 'M' | 'L' | 'XL';

export interface IProduct extends IBaseModel {
  title: string;
  stock: number;
  size?: Sizes;
  category: ICategory;
}
