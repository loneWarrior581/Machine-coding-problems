// Arrary.filter((element, index) => some condition) @returns a new array
// [].filter(function() {}) ==> [...]

const isEven = (element) => element%2 == 0;

const x = [2,4, 5,6,9];

Array.prototype.myFilter = function (fn) {
    let ans = [];
    this.forEach((element, index) => {
        if(fn(element)) {
            ans.push(element);
        }
    })
    return ans;
}

console.log(x.myFilter(isEven));
