const prompt = require("prompt-sync")()
class BankAccount {
balance=Number(null)
  constructor(owner, balance) {
    this.owner = owner
    this.balance = balance
  }
  deposit(amount) {
    this.balance += Number(amount)
  }
  withdraw(amount) {
    if (amount <= this.balance) this.balance -= amount
  }
  info() {
    console.log(`Owner: ${this.owner}, Balance: ${this.balance}`)
  }
}
let account = new BankAccount("user1",1000)
let conf = true;
while (conf) {
    console.log("deposit    withdraw      info       close");
    let input = prompt("Choose one option: ")
    
    switch (input) {
        case "deposit":
            let dep_amount = prompt("Enter how much you wan to add: ")
            account.deposit(dep_amount)
    
            break;
    
        case "withdraw":
            let wit_amount = prompt("Enter how much you want to withdraw: ")
    
            account.withdraw(wit_amount)
            break;
    
        case "info":
            
            account.info()
            break; 
        case "close":
            conf=false;
        break; 
    }
    


}