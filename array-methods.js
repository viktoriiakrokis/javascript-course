//Create some arrays
const numbers = [43,56, 33, 23, 44,36,5];
const numbers2 = new Array(22,45,33,76,54);
const fruit = ['Apple', 'Banana', 'Orrange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1,b:1}, new Date()];

let val;

//Get array length
val = numbers.length;
//Cheak if is array
val = Array.isArray(numbers);
//Get single value
val = numbers[3];
//Insert into array
numbers[2] = 100;
//Find index of value
val = numbers.indexOf(36);

//MUTATION ARRAYS
//Add to the end
numbers.push(250);
//Add to front
numbers.unshift(120);
//Take off from end
numbers.pop();
//Take off from front
numbers.shift();
//Splice values
numbers.splice(1,3);
//Reverse
numbers.reverse();

//Concatinate array
val = numbers.concat(numbers2);
//Sorting array
val = fruit.sort();
val = numbers.sort();

//Use the "compare function"
val = numbers.sort(function(x, y) {
  return x-y;
});
//Reverse sort
val = numbers.sort(function(x, y) {
  return y-x;
});

//Find-return first finden number 
function under50(num){
  return num < 50;
};

val = numbers.find(under50);

console.log(numbers);
console.log(val);