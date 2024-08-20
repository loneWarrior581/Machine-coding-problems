// const user = {
//     firstName: 'Uttkarsh',
//     lastName: 'Singh',
//     age: 25,
//     getAgeYear: function() {
//         return new Date().getFullYear() - this.age
//     }
// };

// // this factory function has problem as creating object from this would create multipele instance of same function
// function generateUser(firstName, lastName, age) {
//     const user = {
//         lastName,
//         firstName, 
//         age,
//         getAge: function() {
//             return new Date().getFullYear() - this.age
//         }
//     }
//     return user;
// }

// To solve this issue we can use protptype -- this is constructor function 
function createUser(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

createUser.prototype.getBirthYear = function() {
    return new Date().getFullYear() - this.age;
}

const user1 = new createUser("Uttkarsh", "Singh", 21);
 
// Classes in js
// to solve the problem of constructior function to bind into one place and add a syntactical sugar into it
 
class CreateUser {
    #age; // private member we cannot access using object 
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.#age = age;
    }
    getFullName() {
        return this.firstName + this.lastName;
    }
};

const user2 = new CreateUser('Uttkarsh', 'Singh', 90);
user2.getFullName();