// ====Template String letarel====

const name6 = 'Shamim Ahmed';
const age6 = 21;
const work6 = 'Student';

console.log(`My name is ${name6} and I\'m ${age6} Years old. Currently I\'m  a ${work6}`)

// ===New String Method / startsWith===

const start = "My name is Shamim";
start.startsWith('my');


// ===New String Method / endsWith===

const end = 'I love programming';
end.endsWith('My');


// ===New String Method / includesWith===

const inc = ' I love programming with Javascript';
// inc.includesWith('with');


// ===New String Method / reapetsWith===

const rpt = 'Shamim Ahmed';
rpt.repeat(5);

console.log(`I always want to say  ${'Alhamdulillah '.repeat(5)}`)



//====Es6 / Arrow Function and / lexical this keyword====

// ===Es5 Expression function===

var aFunc = function() {
    console.log('A demo ES5 function Expression');
}
aFunc();

// ===same function arrow func write===
const aFunc6 = () => console.log('A demo ES6 function Expression');
aFunc6();


// ===Es5 Expression function / map() use===

const dob = [1987, 1995, 1999, 2000];

const currentAge5 = dob.map(function(oneDob) {  
    return 2021 - oneDob;
 })
console.log(currentAge5);

// ===same function arrow func write / map() use===

const currentAge6 = dob.map(oneDob => 2021 - oneDob);

console.log(currentAge6);


// ===same function arrow func write / map() use / another line code===

const currentAge62 = dob.map(oneDob => {
    const age = 2022- oneDob;
    return age;
});

console.log(currentAge62);



// =======Lexical this keyword=====

const lex5 = {
    aFunc : function() {
        console.log(this)

        return function() {
            console.log(this)
        }
    }
}

lex5.aFunc()();



// =======Lexical this keyword / Arrow() use=====

const lex6 = {
    aFunc6 : () => {
        console.log(this);
        return () => {
            console.log(this);
        }
    }
}

lex6.aFunc6()()


// =======Lexical this keyword / arrow() / iife invoked use=====

 (() => {
    const name = 'My name is Shamim Ahmed'
    console.log(name);
})();






// ======arrow function ES6======

// ES5 for loop
const num = [ 0,1,2,3,4,5,6,7,8,9]

for(let i = 0; i < num.length; i++) {
    if(num[i] === 5) break;
    console.log('Num printed: ' + num[i] );
}

// same code ES6 
for(const number of num) {
    if (number === 5) break
    console.log(`Number printed ${number}`);
}


// ===arrow function / index check out printed===

const numberIndex = [19, 21, 34, 24, 35];

// es5 index check code
var findNum = numberIndex.map(function(theNum) {
    return theNum === 21;
})
// console.log(findNum)

// indexOf method use find num
console.log(findNum.indexOf(true));



// Es6 findIndex check code
const numberIndex6 = [19, 21, 34, 24, 35];

numberIndex6.findIndex(number => number === 24);