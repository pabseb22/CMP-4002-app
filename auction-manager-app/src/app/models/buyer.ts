import { User } from "./user";

export class Buyer extends User{
  constructor(name:string,
    lastname:string,
    ci:string,
    email:string,
    password:string,
  ){
    super(name,lastname,email,1)
  }

}
