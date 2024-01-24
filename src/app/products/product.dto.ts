import { IProduct } from './product.model';

export interface CreateProductDto
  extends Omit<IProduct, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}
