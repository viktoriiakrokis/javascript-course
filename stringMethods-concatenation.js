const firstName ='William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello there my name is Brad';
const tags = 'web design,web development, programming';

let val;

val = firstName + lastName;

//Concatenation(зчеплення)
val = firstName + ' ' + lastName;

//Append=add
val = 'Brand ';
val += 'Traversy';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

//Escaping= break free from smth
val = 'That\'s awesome, i can\'t wait';

//Length
val = firstName.length;

//concat
val = firstName.concat(' '+ lastName);

//Change case
val = firstName.toUpperCase();
val = firstName.toLocaleLowerCase();

val = firstName[2];

//indexOf()
val = firstName.indexOf('1');
val = firstName.lastIndexOf('2');

//charAt()
val = firstName.charAt('2');
//Get last character
val = firstName.charAt(firstName.length - 1);

//substring()
val = firstName.substring(0, 4);
//slice()
val = firstName.slice(0, 4);
val = firstName.slice(-3);

//split-show every word separatly, like Array
val = str.split(' ');
val = tags.split(',');

//replace()
val = str.replace('Brad', 'Jack');

//include()-answer, do include some word
val = str. includes('Hello');

console.log(val);