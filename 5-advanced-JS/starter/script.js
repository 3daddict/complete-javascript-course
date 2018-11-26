
// //function constructors
// var Person = function(name,yearOfBirth, job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }
// //Using the prototype method to include function in constructor
// Person.prototype.calculateAge = function(){
//     console.log(this.name, 'Age:  ', 2016 - this.yearOfBirth);
// }

// Person.prototype.lastName = 'Smith';

// // Instanciation 
// var john = new Person('John', 1990, 'Teacher');
// var jane = new Person('Jane', 1969, 'designer');
// var mark = new Person('Mark', 1948, 'retired');

// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();

// console.log(john.lastName);
// console.log(jane.lastName);
// console.log(mark.lastName);

//Object.create
var personProto = {
    calculateAge: function(){
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = "Teacher";

var jane = Object.create(personProto, {
    name: { value: 'Jane'},
    yearOfBirth: { value: 1969},
    job: { value: 'Designer'}
});