const myPromise = new Promise((resolve, reject) => {

    //note: if true -> resolve, false -> reject

    if (false) {
        setTimeout(() => {
            resolve('I have succeeded'); //resolve(value)
        }, 1000);
    } else {
        reject('I have failed');
    }
});

myPromise
    .then(resolveValue => console.log(resolveValue))
    .catch(rejectValue => console.log(rejectValue));