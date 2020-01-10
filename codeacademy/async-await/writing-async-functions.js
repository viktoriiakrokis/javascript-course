// function, which returns a promise that resolves to 'Yay, I resolved!' after a 1 second delay
let myPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Yay, I resolved!')
    }, 1000);
  });
}

// write two async functions which invoke myPromise()
async function noAwait() {
  let value = myPromise();
  console.log(value);
 }
 
 async function yesAwait() {
  let value = await myPromise();
  console.log(value);
 }
 
 noAwait(); // Prints: Promise { <pending> }
 yesAwait(); // Prints: Yay, I resolved!

// exercise
 const shopForBeans = require('./library.js');

 async function getBeans() {
   console.log(`1. Heading to the store to buy beans...`);
   let value = await shopForBeans();
   console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
 }
 
 getBeans();