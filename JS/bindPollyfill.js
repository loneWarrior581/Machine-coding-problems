// same as call but only take array of args as second paramater
const obj = {
    name: 'Uttkarsh',
    company: 'Zetwerk'
}

function printInfo(age, color) {
    console.log('Your name is '+ this.name + ' company is '+ this.company+ ' age having' + age, color);
}


Function.prototype.myBind = function (context = {}, ...args) {
    if(typeof this != 'function') {
        throw new Error('Calle is not a function');
    }

    context.__fn = this;
    return function (...newArgs) {
        return context.__fn(...args, ...newArgs); 
    }
}

const x = printInfo.myBind(obj);
x( 22, "blue");
