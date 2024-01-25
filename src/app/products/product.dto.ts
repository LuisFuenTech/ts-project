import { IProduct } from './product.model';

export interface CreateProductDto
  extends Omit<IProduct, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}

export interface UpdateProductDto extends Partial<CreateProductDto> {}

export interface FindProductDto
  extends Readonly<Partial<Omit<IProduct, 'tags'>>> {
  readonly tags: ReadonlyArray<string>;
}
