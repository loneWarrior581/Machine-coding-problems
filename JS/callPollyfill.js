// Function.call(context = {}, arg1, arg2, ...) call the function
const obj = {
    name: 'Uttkarsh',
    company: 'Zetwerk'
}

function printInfo(age) {
    console.log('Your name is '+ this.name + ' company is '+ this.company+ ' age having' + age);
}


Function.prototype.myCall = function (context = {}, ...args) {
    if(typeof this != 'function') {
        throw new Error('Calle is not a function');
    }
    context.__fn = this;
    context.__fn(...args); 
}


printInfo.myCall(obj, 22);;
