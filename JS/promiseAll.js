// Writing a pollyfill for promise.all
const dummyApi = (timer) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Resolved in ${timer}`);
        }, timer);
    });
}
const tasksArray = [dummyApi(100), dummyApi(400), dummyApi(500)];

const promiseAllPolyfill = (tasksArray) => {
    const ans = [];
    return new Promise((resolve, reject) => {
        tasksArray.forEach((promise, index) => {
            promise.then((data) => {
                ans[index] = data;
                if(index == tasksArray.length -1) resolve(ans);
            }).catch((error) => reject(err));
        });
    })
}
const finalPromise = promiseAllPolyfill(tasksArray);
finalPromise.then((data) => console.log(data));
