import { IProduct } from '../products/product.model';
import { IUser } from '../users/user.model';

export interface IOrder {
  id: string | number;
  createdAt: Date;
  products: IProduct[];
  user: IUser;
}
