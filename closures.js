function makeFunc() {
    var count = 0;
    function displayCount() {
        count ++
        return count
    }
    return displayCount;
  }
  
  let myFunc = makeFunc();
  console.log(myFunc());
  console.log(myFunc());
  console.log(myFunc());
  console.log(myFunc());

  
let myFunc1 = makeFunc();
console.log(myFunc1());
console.log(myFunc());