import { User } from "./user";
export class SellerClass extends User{
  constructor(name:string,
    lastname:string,
    ci:string,
    email:string,
    password:string,
  ){
    super(name,lastname,email,0)
  }

}

