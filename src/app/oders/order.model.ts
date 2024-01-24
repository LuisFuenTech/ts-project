import { IBaseModel } from '../base.model';
import { IProduct } from '../products/product.model';
import { IUser } from '../users/user.model';

export interface IOrder extends IBaseModel {
  id: string | number;
  createdAt: Date;
  products: IProduct[];
  user: IUser;
}
