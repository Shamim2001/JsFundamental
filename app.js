/*

// active sting mode testing

//'use strict';
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D')


// create a new function 

function test() {
    console.log(" My name is :Shamim")
}

// calling / running / inovoking 
test();
test();
test();
test();
test();

// arguments function / call arguments

function arguments(apple, orange) {
    console.log(apple, orange);
    const juice = `Juice with ${apple} apples and ${orange} orange.` ;
    return juice;
}
const appleBoth = arguments(5, 0)
console.log(appleBoth);


const num = Number('34')


// array list / array length create 



// const arrayList = ['shamim', 'limon', 'milon', 'azim', 'sajol', 'saju']

// console.log(arrayList)

// for(let i = 0; i< arrayList.length; i++) {
//     console.log('name: ' + arrayList[i] );
// }


*/



// Another Function call 

function cutFruitpieces(fruit) {
    return fruit * 4;
}

function arguments(apple, orange) {

    const applePieces = cutFruitpieces(apple)
    const orangePieces = cutFruitpieces(orange)


    const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} piece of orange.` ;
    return juice;
}

console.log(arguments(2, 3))





// coding challenge 

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(2, 3, 4));



