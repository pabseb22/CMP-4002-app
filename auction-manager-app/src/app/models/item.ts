import { Buyer } from "./buyer";

export class Item {
  constructor(
    public id:number,
    public name:string,
    public imgsrc:string,
    public des:string,
    public interested:string[],
    public available:boolean,
    public starting_price:number,
  ){
  }
  }
