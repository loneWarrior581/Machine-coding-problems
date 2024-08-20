let user = {
    firstName: "Uttkarsh",
    lastName: "Singh"
};

function fullName() {
    console.log(this.firstName + this.lastName);
}

fullName.call(user);
