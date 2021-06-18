
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