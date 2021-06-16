//  this keyword / global rules 

function myObj() {
    this.name = 'shamim ahmed'
}

console.log(myObj)


// this keyword / object rules 

var myCustomObj = {
    name : 'shamim Ahmed',
    age : 21,
    job : 'student',
    msg: function () {
        console.log('My Name is ' + this.name );
    }
}
myCustomObj.msg();

// this keyword / object rules / value define object

var myCustomObj = {
    name : 'shamim Ahmed',
    age : 21,
    job : 'student',
    msg: function () {
        console.log( this === myCustomObj );
    }
}

myCustomObj.msg();




// this keyword / object rules / another obj this value check


var myCustomObj = {
    name : 'shamim Ahmed',
    age : 21,
    job : 'student',
    
    anotherObj: {
        name : 'Ahmed Shamim ',
        value : function () {
            console.log('My name is ' + this.name )
        }.call(myCustomObj)
    }
}

//  myCustomObj.anotherObj.value.call(myCustomObj);


// defirent obj value check / call() function

var karim = {
    name : 'karim rahman',
    dob : 1996,
    age : function(currentYear) {
        console.log(this.name + ' is ' + (currentYear - this.dob) + ' years old!');

    }
}
// karim.age(2021)

var rahim ={
    name : 'Abdul Rahim',
    dob : 1990
}
karim.age.call(rahim, 2021);


/*
 uporer task gula / apply() / bind() / function use koreo task complite kora jabe
 */



 // apply() function work 


var karim ={
    name : 'Shamim Rahman',
    dob : 2000,
    age : function(currentYear, msg) {
        console.log(msg + ' ' + this.name + ' is ' + (currentYear - this.dob) + ' years old!' );
    }
}

var rahim = {
    name : 'Abdul Rahim',
    dob : 1997
}
karim.age.apply(rahim, [2021, 'Hello World!']);




// bind() function work

var myCustomObj = {
    name: 'Shamim Ahmed',
    age: 21,
    job: 'Student',
    anotherObj: {
       name: 'Ahmed Shamim',
       value: function() {
          console.log('My name is ' + this.name);
       }
    }
 }
 var anotherfunc = myCustomObj.anotherObj.value.bind(myCustomObj)

 anotherfunc()

// this check it work 

 var myObj = {
    name: 'Shamim Ahmed',
    age: 21,
    timer: function() {
       setTimeout(function() {
          console.log('My name is ' + this.name);
       }.bind(myObj), 4000)
     }
 }
 myObj.timer()