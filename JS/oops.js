// How to prevent function from beign replicated
const functionBundel = {
    addMoney: function() {
        this.accountBalance++;
    },
    fetchBalance: function() {
        console.log(`your balance is ${this.accountBalance}`);
    }
}

function createCustomer(name,accountBalance,branch) {
    const customer = Object.create(functionBundel);
    customer.name = name;
    customer.accountBalance = accountBalance;
    customer.branch = branch;
    return customer;
}

const customer1 = createCustomer("Uttkarsh", 100, "BOB");




// Or we ca attach functions to prototype of the CreateCustomer function

function CreateCustomer(name, accountBalance, branch) {
    this.name = name;
    this.accountBalance = accountBalance;
    this.branch = branch;
}

CreateCustomer.prototype.addMoney = function() {
    this.accountBalance++;
}

CreateCustomer.prototype.fetchBalance = function() {
    console.log(this.accountBalance);
}
const customer2 = new CreateCustomer("Uttkarsh", 100, 'sbi');


// Or same thing can be achived using class and constructor 

class CreateCustomer1 {
    constructor(name, accountBalance, branch) {
        this.name = name;
        this.accountBalance = accountBalance;
        this.branch = branch;
    }
    addMoney() {
        this.accountBalance++;
    }
    fetchBalance() {
        console.log(this.accountBalance);
    }
};


const customer3 = new CreateCustomer1("Uttkarsh", 100,'sbi');


