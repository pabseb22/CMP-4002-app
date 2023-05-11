import { Buyer } from "./buyer";

export class Item {
  constructor(
    public id:number,
    public name:string,
    public imgsrc:string,
    public des:string,
    public interested:Buyer,
    public available:boolean
  ){
  }
}
