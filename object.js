// const student = {
//     firstName : 'shamim',
//     LastName : 'Ahmed',
//     job : 'honours 2nd year student / Web developer',
//     year : 2021,
//     obj : 'object oriented '
// }
// console.log(student)
// console.log(student.firstName);
// console.log(student.lastName);
// console.log(student.job);
// console.log(student.year );



// js object oriented / Js OOP / primitive data type object 
/*
var a = 10 
var b = 20

console.log('Before swap : Value of a : ' + a + ' and value of b : ' + b );

function swap(a, b) {
    console.log('Before swap inside function: Value of a : ' + a + ' and value of b : ' + b );
    var temp = a;
    a = b;
    b = temp;
    console.log('After swap inside function: Value of a : ' + a + ' and value of b : ' + b );
}

swap(a, b);
console.log('After swap: value of a: ' + a + ' and value of b :' + b);


// Object data type oop 

var obj = {
    a : 10,
    b : 20
}

console.log('Before swap: Value of a : ' + obj.a + ' and value of b : ' + obj.b );


function swap(x) {
    console.log('Before swap inside function: Value of a : ' + x.a + ' and value of b : ' + x.b );
    var temp = x.a;
    x.a = x.b;
    x.b = temp;
    console.log('After swap inside function: Value of a : ' + x.a + ' and value of b : ' + x.b );
}

swap(obj);
console.log('After swap: Value of a: ' + obj.a + ' and value of b: ' + obj.b);


var str = new String('My name is Shamim')

console.dir(str);




// Advance Js Function with Constructor / new keyword

// Blue print create 
var Person = function(nameAvg , ageAvg, jobAvg) {
    this.name = nameAvg;
    this.age = ageAvg;
    this.job = jobAvg;
    this.dob = function() {
        console.log(this.name + ' is bord in ' + (2021 - this.age))
    }
}

var shamim = new Person("Shamim Ahmed", 21, 'Student');

console.log(shamim)



//method access / Constructor function 

var Person = function(nameAvg , ageAvg, jobAvg) {
    this.name = nameAvg;
    this.age = ageAvg;
    this.job = jobAvg;
    this.dob = function() {
        console.log(this.name + ' is bord in ' + (2021 - this.age))
    }
}

var shamim = new Person("Shamim Ahmed", 21, 'Student');

shamim.dob();


*/

// prototype method use connected / Constructor 

var PersonOnly = function(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
 }
 PersonOnly.prototype.dateOfBirth = function() {
    console.log(this.name + ' born in ' + (2021 - this.age));
 }


 console.log(PersonOnly.prototype);

var shamim = new PersonOnly('Shamim Ahmed', 21 , 'student')

shamim.dateOfBirth();