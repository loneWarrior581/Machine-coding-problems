// Filter pollyfill
// [].filter(function() {}) ==> []

Array.prototype.myFilter = function(fn) {
    let ans = [];
    this.forEach((element) => {
        if(fn(element)) ans.push(element);
    });
    return ans;
}

const x = [1,2,3,4,5,6];
console.log(x.myFilter(el => el%2));