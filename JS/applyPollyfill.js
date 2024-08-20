// same as call but only take array of args as second paramater
const obj = {
    name: 'Uttkarsh',
    company: 'Zetwerk'
}

function printInfo(age, color) {
    console.log('Your name is '+ this.name + ' company is '+ this.company+ ' age having' + age, color);
}


Function.prototype.myApply = function (context = {}, args=[]) {
    if(typeof this != 'function') {
        throw new Error('Calle is not a function');
    }

    if(!Array.isArray(args)) {
        throw new Error('Args is not an array');
    }
    context.__fn = this;
    context.__fn(...args); 
}

printInfo.myApply(obj, [22, "blue"]);
