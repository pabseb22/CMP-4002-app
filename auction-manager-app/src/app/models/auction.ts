import { Bid } from "./bid";
import { Buyer } from "./buyer";
import { Item } from "./item";

export class Auction {
  constructor(
    public id:number,
    public item_id:Item,
    public price:number,
    public startDate:Date,
    public endDate:Date,
    public name:string,
    public imgsrc:string,
    public bids:string[],
    public status:number
  ){
  }
  notifyBuyers(buyers:Buyer[]){
  }
}
