import { Buyer } from "./buyer";

export class Bid {
  constructor(public user_id:number, 
    public amount:number,
    public auction_id:number,
    public email:string){

  }
}
