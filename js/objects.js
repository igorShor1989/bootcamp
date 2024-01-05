// learning: primitive type: https://developer.mozilla.org/en-US/docs/Glossary/Primitive
const primitive1 = 5;
const primitive2 = 'string';
const primitive3 = true;
const primitive4 = null;
const primitive5 = undefined;

console.log('primitive1', primitive1, 'typeof', typeof primitive1)
console.log('primitive2', primitive2, 'typeof', typeof primitive2)
console.log('primitive3', primitive3, 'typeof', typeof primitive3)
console.log('primitive4', primitive4, 'typeof', typeof primitive4, 'This is considered a bug, but one which cannot be fixed because it will break too many scripts.')
console.log('primitive5', primitive5, 'typeof', typeof primitive5)

// learning: object type: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

const object1 = {};

// everything is an object :O
const object2 = [];
const object3 = function () {};
const object4 = class {};

console.log('object1', object1, 'typeof', object1, 'tostring', object1.toString())
console.log('object2', object2, 'typeof', object2, 'tostring', object2.toString())
console.log('object3', object3, 'typeof', object3, 'tostring', object3.toString())
console.log('object4', object4, 'typeof', object4, 'tostring', object4.toString())

object1.__proto__ = () => {}

console.log('object1', object1, 'typeof', object1)