//FOR LOOP

for(let i = 0; i <= 10; i++){
  if(i === 2){
    console.log('2 is my favourite number');
    continue;
  }

  if(i === 5){
    console.log('Stop the loop');
    break;
  }

  console.log('Number ' + i);
}

console.log(' ');

//WHILE LOOP
let a = 0;

while (a < 10){
  console.log('Number ' + a);
  a++;
}

console.log(' ');

//DO WHILE
let c = 100;
//it will print Number + 100(it not happend in while or loop)

do{
  console.log('Number '+ c);
  c++;
}

while (c < 10);

console.log(' ');

//LOOP THROUGH ARRAY
const cars = ['Ford','Chevy', 'Honda', 'Toyota'];

for(let b = 0; b < cars.length; b++){
  console.log(cars[b]);//printing array
}

console.log(' ');

//FOREACH
cars.forEach(function(car, index, array){
  console.log(`${index} : ${car}`);
  console.log(array);
});

console.log(' ');

/*//MAP
const users = [
  {id:1, name:'John'},
  {id:2, name: 'Sara'},
  {id:3, name: 'Karen'}
  {id:4, name: 'Emeli'},
];

const ids = users.map(function(user){
  return user.id;
});

console.log(ids);
*/

//FOR IN LOOP
const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 40
}

for(let x in user){
  console.log(`${x}: ${user[x]}`);
}