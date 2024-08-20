class Emmiter {
    constructor() {
        this._subscription = new Map();
    }
    
    subscribe(eventName, callBackFn) {
        if(!this._subscription.has(eventName)) {
            this._subscription.set(eventName, new Map());
        }
        const subscriptionList = this._subscription.get(eventName);
        const subsId = new Date().getTime();
        subscriptionList.set(subsId, callBackFn);

        return {
            release: function () {
                if(!subscriptionList.has(subsId)) {
                    throw new Error('Subscription already released')
                }
                subscriptionList.delete(subsId);
            }
        }
    }

    emit(eventName, ...args) {
        const subscriptionList = this._subscription.get(eventName);
        subscriptionList.forEach(fn => {
            fn(...args);
        });
    }
};


const emmiter = new Emmiter();

emmiter.subscribe('modify', () => console.log("called modify"));

