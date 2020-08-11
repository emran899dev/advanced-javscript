// The JavaScript Array Map() Method

// es5 apply

const array = [2, 5, 9];
let squares = [];

for (let i = 0; i < array.length; i++) {
    squares.push(array[i] * array[i]);
}

console.log(squares); // [4, 25, 81]
console.log(array); // [2, 5, 9]

// es6 apply
const number = [2, 5, 9];

const result = number.map(function (element) {
    return element * element
}) 
const result1 = number.map((element) => {return element*element})
const result2 = number.map(x => x * x)
console.log(result2);

const bigger = number.filter(x => x < 4)
console.log(bigger);