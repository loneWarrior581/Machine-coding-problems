// Flatten an array :
let arr = [[[1, [1,1]], 2,3], [4, 5]];
var ans = [];
function flattenArray(arr) {
    for(el of arr) {
        if(Array.isArray(el)) {
            flattenArray(el);
        } else {
            ans.push(el);
        }
    }
}
flattenArray(arr);
console.log(ans);

// call 
var obj = {name: "Uttkarsh"};
function sayHello(age) {
    return "name is "+ this.name + age;
}

console.log(sayHello.call(obj, 22));

// apply - same as call but in array


// bind
