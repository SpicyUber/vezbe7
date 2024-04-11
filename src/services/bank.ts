import { User } from './../models/user';
import { Account } from "../models/account";

export class Bank{
private users:User[]=[];
private accounts:Account[]=[];

registerUser(user:User):void{
    this.users.push(user);
    console.log(`User ${user.name} has been added.`);


}
openAccount(user:User):void{
const accountId= this.accounts.length;    
const newAccount:Account= new Account(accountId,user,0);
this.accounts.push(newAccount);
console.log(`Account opened successfully for user ${user.name}`);


}

displayUserAccounts(userId:number):void{
    const userAccounts=this.accounts.filter(element=>element.user.id===userId);
    console.log(`Accounts for user with ID: ${userId} :`);
    userAccounts.forEach(account=>account.displayBalance());
}



}