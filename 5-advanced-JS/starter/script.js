
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
// var personProto = {
//     calculateAge: function(){
//         console.log(2016 - this.yearOfBirth);
//     }
// };

// var john = Object.create(personProto);
// john.name = 'John';
// john.yearOfBirth = 1990;
// john.job = "Teacher";

// var jane = Object.create(personProto, {
//     name: { value: 'Jane'},
//     yearOfBirth: { value: 1969},
//     job: { value: 'Designer'}
// });

//Primitives vs Objects

//Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

//Objects
var obj1 = {
    name: 'John',
    age: 26
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

//Functions
var age = 27;
var obj = {
    name: "Jonas",
    city: 'Lisbon'
}

function change(a, b){
    a = 30;
    b.city = 'San Fancisco';
}

change(age, obj);
console.log(age);
console.log(obj.city);