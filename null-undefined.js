let name;
console.log(name);

function add(a, b) {
    console.log(a+b);
}
const result = add(100, 200)
console.log(result);

function add(a, b) {
    console.log(a, b);
    }
    const result = add(100)
    console.log(result);

let person = {
    name: 'Emran',
    roll: 328435
}

console.log(person.reg);

if (person.reg) {
    console.log('Condition is true');
} else {
    console.log('Condition is false');
}

typeof undefined     // "undefined"
null === undefined   // false
null  == undefined   // true
null === null        // true
null == null         // true
!null