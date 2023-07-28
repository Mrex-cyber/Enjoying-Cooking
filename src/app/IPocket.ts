import { IUser } from "./IUser";

export interface IPocket {
  id: string;
  userId: string;
  user: IUser;
  userEmail: string;
  Cash : number;
}
