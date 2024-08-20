// Debounce polyfill implementation

function getData() {
    console.log('Getting data');
}

const debounce = (cb, delay=400) => {
    let timer;
    return (...args) => {
        let context = this;
        if(timer)
            clearTimeout(timer);
        timer = setTimeout(() => {
            cb.apply(context, args);
        }, delay)
    }
}

const betterFunction = deboucne(getData, 300);
betterFunction(argunemts);




