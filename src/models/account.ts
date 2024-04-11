import { User } from "./user";
export class Account{

    constructor(public id:number, public user:User, public balance:number){

    }
    displayBalance():void{
    console.log(`Account id: ${this.id}`);
    console.log(`Balance: ${this.balance}`);
    console.log(`User info - name: ${this.user.name}, email: ${this.user.email}`);
    

    }


}