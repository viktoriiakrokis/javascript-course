// buildind asynchronous logic with async
async function myFunc() {
  // Function body here
};

myFunc();

// create async function expressions
const myFunc = async () => {
  // Function body here
};

myFunc();


async function fivePromise() { 
  return 5;
}

fivePromise()
.then(resolvedValue => {
    console.log(resolvedValue);
  })  // Prints 5


// exercise
function withConstructor(num){
  return new Promise((resolve, reject) => {
    if (num === 0){
      resolve('zero');
    } else {
      resolve('not zero');
    }
  })
}

withConstructor(0)
  .then((resolveValue) => {
  console.log(` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`);
})

// Write your code below:
async function withAsync(num){
  if (num === 0){
      return 'zero';
    } else {
      return 'not zero';
    }
}

withAsync(100)
  .then((resolveValue) => {
  console.log(` withAsync(100) returned a promise which resolved to: ${resolveValue}.`);
})
