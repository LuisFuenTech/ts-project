import { IBaseModel } from '../base.model';

export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
}

export interface IUser extends IBaseModel {
  username: string;
  role: ROLES;
}
