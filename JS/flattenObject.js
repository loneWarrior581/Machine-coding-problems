// Flatten Object
const obj = {
    a: "12",
    b: 23,
    c: {
        p: 12,
        o: {
            l: 56
        },
        q: [1, 2]
    }
};

function flattenObject(obj, parent) {
    const finalObj = {};
    const generatFlattenObj = (obj, parent) => {
        for(let key in obj) {
            const newParent = parent+key;
            const value = obj[key];
            if(typeof value === 'object') {
                generatFlattenObj(value, newParent+".");
            } else {
                finalObj[newParent] = value;
            }
        }
    }
    generatFlattenObj(obj, parent);
    return finalObj;
}

console.log(flattenObject(obj, ""));