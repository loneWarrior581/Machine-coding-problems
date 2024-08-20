// Reduce pollyfill
//[].reduce((acc, curr) => { computation }, 0);

function callBackFunction(acc,curr) {
    // some computation
}


Array.prototype.myReduce = function(callback, initialValue) {
    if(!this) throw new Error('Array is not defined');
    var arr = this;
    var index = 0;
    var accumulator;
    var n = arr.length;
    if(!n) {
        if(initialValue) return initialValue;
        else throw new Error('You must provide initial value');
    }
    if(initialValue) {
        accumulator = initialValue;
    } else {
        accumulator = arr[0];
        index++;
    }
    while(index < n) {
        accumulator = callback(accumulator, arr[index], arr);
        index++;
    }
    return accumulator;
};

let ar = null;
let initialValue = 1;
// console.log(ar.myReduce((ac, cr) => ac+= cr, initialValue));


var obj = {a: 10};

class X {
	constructor() {
        return obj;
    }
};


let a = new X();
let b = new X();
console.log(a==b,"a==b")
console.log(a===b,"a===b")