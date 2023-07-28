import { IPocket } from "./IPocket";

export interface IUser {
  id: string;
  userName: string;
  fullName : string;
  age : number;
  email: string;
  password : string;
  emailConfirmed : boolean;
  PocketId : string;
  Pocket : IPocket;
  Token: string;
}
