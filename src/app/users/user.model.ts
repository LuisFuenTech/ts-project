export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
}

export interface IUser {
  id: string | number;
  username: string;
  role: ROLES;
}
