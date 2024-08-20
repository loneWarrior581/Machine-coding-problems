/**
 * Array.flat(depth=1) // returns new array with the result with element 
 * in a nested according to depth
 */

const x = [1,2,3,[4, 5,[6, 7,[8,9]]]];

function myArrayFlat(arr,depth =1, output = []) {
    if(depth <= 0) {
        output.push(arr);
        return output;
    } else {
        for(let element of arr) {
            if(Array.isArray(element)) {
                myArrayFlat(element, depth -1, output)
            } else {
                output.push(element);
            }
        }
    }
    return output;
}

console.log(myArrayFlat(x,2));