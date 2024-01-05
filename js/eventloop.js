// learning: https://dev.to/princam/javascript-event-loop-simply-explained-5d75

function doSomthing() {
    console.log(1);
    setTimeout(function () {
        console.log(2);
    }, 1000);
    setTimeout(function () {
        console.log(3);
    }, 0);

    new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(4);
        }, 1000);
    }).then(console.log)

    new Promise(function (resolve, reject) {
        resolve(5);
    }).then(console.log)
    console.log(6);
}

doSomthing();