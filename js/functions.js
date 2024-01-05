// learning: functions: https://www.w3schools.com/js/js_function_definition.asp;
// learning: arrow function vs normal function: https://www.freecodecamp.org/news/the-difference-between-arrow-functions-and-normal-functions/
function printFunction() {
    console.log(this)
}

const printArrow = () => {
    console.log(this)
}

console.log('curr this', this);
const obj = {
    name: 'bootcamp',
    age: 200,
    printFunction: function() {
        console.log(this)
    },
    printArrow: () => {
        console.log(this)
    },
}

obj.printFunction();
obj.printArrow();
printFunction();
printArrow();

// printArrow.call()
// printArrow.apply()
// printArrow.bind()