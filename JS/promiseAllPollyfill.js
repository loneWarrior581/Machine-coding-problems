// Promise.all([]) Implementation 

const p1 =  new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('First')
        }, 500);
    })


const p2 =  new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Second')
        }, 1000);
    })


const p3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Third')
        }, 1500);
    })


Promise.allPollyfill = (promises = []) => {
    let ans = [];
    return new Promise((resolve, reject) => {
        promises.forEach(async (promise, index) => {
            try {
                let x = await promise;
                ans.push(x);
                if(promises.length -1 == index) {
                    return resolve(ans);
                }
            } catch (error) {
                reject(error);
            }
        })
    })
}
// Promise.allPollyfill([p1, p2, p3]);
Promise.allPollyfill([p1, p2, p3]).then((res) => console.log(res));


