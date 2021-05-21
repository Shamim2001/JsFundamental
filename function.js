
/*
// parameter funtion expression 
function calcAge(birthYear) {
     return 2021 - birthYear;
    
}
// function call

const calcAge2 = calcAge(2000);
// console.log(calcAge2);

// function expression 

const calcAge3 = function(birthYear){
    return 2021 - birthYear;

}
// duble function call 
const calcAge4 = calcAge3(2000);
console.log(calcAge2, calcAge4 );

// end function 







// es5 function expression / arrow function  
const aFunc = function(){
    console.log('es5 function exdpression')
}
aFunc();



 
// es6 arow function 
 
const aFunc6 = () => console.log('ES6 function demo' );
aFunc6();

*/



// Execution stack / what is work??

const Names = 'Shamim';

function first() {
    var welcome = 'Hello ';
    second();
    console.log(welcome + Names);
 }

function second() {
    const welcome2 = 'hi!';
    third();
    console.log(welcome2 + Names);
}

function third() {
    const welcome3 = 'hey!';
    console.log(welcome3 + Names);
}

first();


