import { Buyer } from "./buyer";
import { Item } from "./item";

export class Auction {
  constructor(
    public id:number,
    public items:Item,
    public price:number,
    public startDate:Date,
    public endDate:Date,
  ){

  }
  notifyBuyers(buyers:Buyer[]){

  }

}
