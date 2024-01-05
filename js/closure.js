// learning: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

const add = (numA, numB) => numA + numB;
const subtract = (numA, numB) => numA - numB;
const multiply = (numA, numB) => numA * numB;
const divide = (numA, numB) => numA / numB;


let result = add(5, 5);
console.log('<>', result, '<>');
result = subtract(result, 2);
console.log('<>', result, '<>');
result = multiply(result, 2);
console.log('<>', result, '<>');
result = divide(result, 3);
console.log('<>', result, '<>');






const calculator = (initialValue) => {
    let result = initialValue ?? 0;

    return {
        add: (num) => result += num,
        subtract: (num) => result -= num,
        multiply: (num) => result *= num,
        divide: (num) => result /= num,
        reset: () => result = initialValue ?? 0,
        getResult: () => result,
    }
}


const calculatorController = calculator(10);
console.log('<>', calculatorController.getResult(), '<>');
calculatorController.add(5);
console.log('<>', calculatorController.getResult(), '<>');
calculatorController.subtract(1);
console.log('<>', calculatorController.getResult(), '<>');
calculatorController.multiply(2);
console.log('<>', calculatorController.getResult(), '<>');
calculatorController.divide(3);
console.log('<>', calculatorController.getResult(), '<>');
calculatorController.reset();
console.log('<>', calculatorController.getResult(), '<>');