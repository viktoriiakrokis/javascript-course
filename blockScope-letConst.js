//Global Scope
var a = 1;//changeable
let b = 2;//not changeable
const c = 3;//not changeable

function test() {
  //It doesn't change variable a, b, c
  var a = 4;
  let b = 5;
  const c = 6;
  console.log('Function Scope: ', a, b, c);
}

test();

if(true) {
  //Block Scope
  //It change variable a
  var a = 4;
  let b = 5;
  const c = 6;

  console.log('If Scope: ', a, b, c);
}

for(var a = 0; a < 10; a ++){
  //Change value 'a' of the Global Scope
  //If a will be let - it will not change that
  console.log(`Loop: ${a}`);
}

console.log('Global Scope: ', a, b, c);