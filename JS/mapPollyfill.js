// map pollyfill 
// [].map(function(){}) // returns a new array

Array.prototype.myMap = function (fn) {
    const ans = [];
    for(let i =0;i<this.length;i++) {
        ans[i] = fn(this[i]);
    }
    return ans;
}

const arr = [1,2, 3];
console.log(arr.myMap((x) => 2*x));

// filter pollyfill
