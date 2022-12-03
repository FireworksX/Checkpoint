export const promiseWaiter = (duration = 300) => new Promise(resolve => setTimeout(resolve, duration))
