/*
//var, let, const

var name = 'John Doe';
console.log(name);
name = 'Steve Smith';
console.log(name);

//Init var
var greeting;
console.log(greeting);
greeting = 'Hello';
console.log(greeting);

//letters, number,   _< $
//Can not start with number

//multi word vars
var first = 'John'; //Camel case
var first_name = 'Sara';//Underscore
var FirstName = 'Tom';
//Pascal case
var firstname;

let name;//let works same like var
let name = 'John Doe';
console.log(name);
name = 'Steve Smith';
console.log(name);
*/
const name = 'John';
console.log(name);
//Can not reassign
//name = 'Sara';
//Have to assign a value
//const greeting;

const person = {//object
  name: 'John',
  age: 30
}

person.name ='Sara';
person.age = 32;

//console.log(person);

const numbers = [1,2,3,4,5];//Array
numbers.push(6);
//come error because it is whole new array const numbers = [1,2,3,4,5,6];
console.log(numbers);
