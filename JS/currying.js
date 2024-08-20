// Implementing curring 
// sum(2)(3)(4) can be upto infinite level

// function sum(a) {
//     return function(b) {
//         if(b) return sum(a+b);
//         return a;
//     }
// }


// sum of previod values
const curryFun = ()=> {
    let ans = 0;
    return (x) => {
        ans += (x ?? 0);
        return ans;
    }
}
const sum = curryFun();
console.log(sum(1))
console.log(sum(2))
console.log(sum(3))
console.log(sum(4))
console.log(sum())