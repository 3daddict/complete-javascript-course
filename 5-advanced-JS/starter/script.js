
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

// //Primitives vs Objects

// //Primitives
// var a = 23;
// var b = a;
// a = 46;
// console.log(a);
// console.log(b);

// //Objects
// var obj1 = {
//     name: 'John',
//     age: 26
// };

// var obj2 = obj1;
// obj1.age = 30;
// console.log(obj1.age);
// console.log(obj2.age);

// //Functions
// var age = 27;
// var obj = {
//     name: "Jonas",
//     city: 'Lisbon'
// }

// function change(a, b){
//     a = 30;
//     b.city = 'San Fancisco';
// }

// change(age, obj);
// console.log(age);
// console.log(obj.city);

//Passing functions as arguments
// var years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn){
//     var arrRes = [];
//     for(var i in years){
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }

// function calculateAge(el){
//     return 2016 - el;
// }

// function isFullAge(el){
//     return el >= 18;
// }

// function maxHeartRate(el){
//     if (el >= 18 && el <= 81) {
//         return Math.round(206.9 - (0.67 * el));
//     } else {
//         return -1;
//     }
// }

// var ages = arrayCalc(years, calculateAge);
// console.log(ages);

// var fullAges = arrayCalc(ages, isFullAge);
// console.log(fullAges);

// var rates = arrayCalc(ages, maxHeartRate);
// console.log(rates);

//Functions returning another function
// function interviewQuestion(job){
//     if (job === 'designer') {
//         return function(name) {
//             console.log(name, ', Can you please explain what UX design is?')
//         }
//     } else if(job === 'teacher') {
//         return function(name){
//             console.log('what subject do you teach', name);
//         }
//     } else {
//         return function(name) {
//             console.log('Hello', name, 'what do you do?');
//         }
//     }
// }

// var teacherQuestion = interviewQuestion('teacher');
// var designerQuestion = interviewQuestion('designer');

// teacherQuestion('John');
// designerQuestion('Jane');

// interviewQuestion('teacher')('Mark');

//IIFE
//Immediatlt Invoked Function

// function game() {
//     var score = Math.random() * 10;
//     console.log(score >= 5);

// }
// game();

// (function(goodluck){
//     var score = Math.random() * 10;
//     console.log(score >= 5 - goodluck);
// })(5);

//Closures
function retirement(retirementAge) {
    var a = ' years left until retirement';
    return function(yearOfBirth){
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

// var retirementUS = retirement(66);
// retirementUS(1990);

retirement(66)(1990);