//FUNCTION DECLARATION

//it is better way to define parameters
function greet(firstName = 'John', lastName = 'Doe'){//firstName, lasName is parameter
  //
  //console.log('Hello');
  //if(typeof firstName === 'undefined'){firstName = 'John'}
  //if(typeof lastName === 'undefined'){lastName = 'Doe'}

  return 'Hello ' + firstName + ' ' + lastName; 
}
//if i will not define value, i will get undefined
//console.log(greet('John', 'Doe'));

console.log(greet());

//FUNCTION EXPRESSIONS

const square = function(x = 3){
  return x*x;
};

//it count fist of all from down value
console.log(square(8));

//IMMIDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs 
(function(name){
  console.log('Hello ' + name);
})('Brad');

//PROPERTY METHODS

const todo = {
  add: function(){
    console.log('Add todo..');
  },
  edit: function(id){
    console.log(`Edit todo ${id}`);
  }
}

todo.delete = function(){
  console.log('Delete todo..');
}

todo.add();
todo.edit(22);
todo.delete();