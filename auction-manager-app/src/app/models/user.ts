export class User {
  constructor(private name:string,
    private lastname:string,
    private ci:string,
    public email:string,
    public password:string,
    public type:number
  ){
  }
}
