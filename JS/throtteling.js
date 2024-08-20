// Make a function to throttel the api call 
function getData() {
    console.log('Getting data');
}

const throttel = function(cb, limit) {
    let flag;
    return function(...args) {
        let context = this
        if(flag) {
            cb.apply(context, args);
            flag = false;
            setTimeout(() => {
                flag = true;
            }, limit);
        }
    }
}

// more readable
const myThrottle = (cb, delay) => {
    let last = 0;
    return (...args) => {
        let now = new Date().getTime();
        if(now - last < d) return;
        last = now;
        cb.apply(this, args);
    }
}


const betterFunction = throttel(getData, 300);
