// learning: variables: https://www.w3schools.com/js/js_variables.asp
// learning: why not var: https://www.w3schools.com/js/js_variables.asp
// learning: why not var: https://kesharvani.hashnode.dev/why-using-var-is-a-bad-practice-in-javascript

// access before Initialisation
console.log(x); // hoisting

var x = 5;
var y = 6;
var z = x + y;

// redeclaration :(
var x = 1;

// problem ? :)

function processArray (array = Array(3)) {
    for(var i = 0; i < array.length; i++) {
        setTimeout(() => console.log('Element ', i))
    }

    console.log('I can use variable i outside the loop :(', i);
}

// processArray()

let x1 = 5;
const y1 = 6;
const z1 = x1 + y1;
x1 = 1;


function goodProcessArray (array = Array(3)) {
    for(let i = 0; i < array.length; i++) {
        setTimeout(() => console.log('Element ', i))
    }

    try {
        console.log(i);
    } catch {
        console.log('I can`t use variable i outside the loop :)');
    }
}

// goodProcessArray()