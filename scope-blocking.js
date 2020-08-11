// Block Scope

// function foo() {
//     if(true){
//         var fruit1 = 'apple';        //exist in function scope
//         const fruit2 = 'banana';     //exist in block scope
//         let fruit3 = 'strawberry';   //exist in block scope

//     }
//     console.log(fruit1);
//     console.log(fruit2);
//     console.log(fruit3);
// }

// foo();
//result:
//apple
//error: fruit2 is not defined
//error: fruit3 is not defined


// Lexical Scope

function foo1(){
    var fruit1 = 'apple';        
    const fruit2 = 'banana';     
    let fruit3 = 'strawberry';
    function foo2(){
        console.log(fruit1);
        console.log(fruit2);
        console.log(fruit3);
    }
    foo2();
}

foo1();

//result:
//apple
//banana
//strawberry