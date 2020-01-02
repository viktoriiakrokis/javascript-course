// setTimeout() Function has 2 parameters: a callback function and a delay in milliseconds

const delayedHello = () => {
  console.log('Hi! This is an asynchronous greeting!');
};

setTimeout(delayedHello, 2000);

// using setTimeout() to construct asynchronous promises

const returnPromiseFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(( ) => {resolve('I resolved!')}, 1000);
  });
};

const prom = returnPromiseFunction();

// exercise,  to check the result write in terminal node  app.js

console.log("This is the first line of code in app.js.");

const usingSTO = () => {
  console.log('Yay!');
};

 setTimeout(usingSTO, 3000);

console.log("This is the last line of code in app.js.");