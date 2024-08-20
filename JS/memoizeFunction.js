// We would be using the concept of closures to deal with this
const memioze = (fn) => {
    const cache = {};
    return (...args) => {
        const argsToString = JSON.stringify(args);
        if(argsToString in cache) {
            console.log(`Fetching from cache ${argsToString}`);
            return cache[argsToString];
        } else {
            console.log(`Calculating values of args ${argsToString}`);
            const result = fn(...args);
            cache[argsToString] = result;
            return result;
        }
    }
};






const addThreeNumbers = (a, b, c) => a + b + c;
functionAdd = memioze(addThreeNumbers);
console.log(functionAdd(1,2,3));