// es6 array, object map, filter
const person = [
    { name: 'Emran', roll: 328435 },
    { name: 'nazir', roll: 328433 },
    { name: 'Santho', roll: 328431 },
    { name: 'Emon', roll: 328428 }

]
const names = person.map(n => n.name)
console.log(names);

const bigger = person.filter(personRoll => personRoll.roll > 328428)
console.log(bigger);
