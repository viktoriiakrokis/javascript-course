// Mistake 1: Nesting promises instead of chaining them.

returnsFirstPromise()
.then((firstResolveVal) => {
  return returnsSecondValue(firstResolveVal)
    .then((secondResolveVal) => {
      console.log(secondResolveVal);
    })
})

// Mistake 2: Forgetting to return a promise.

returnsFirstPromise()
.then((firstResolveVal) => {
  returnsSecondValue(firstResolveVal)
})
.then((someVal) => {
  console.log(someVal);
})

// exercise 

const {checkInventory, processPayment, shipOrder} = require('./library.js');

const order = {
  items: [['sunglasses', 1], ['bags', 2]],
  giftcardBalance: 79.82
};


checkInventory(order)
.then((resolvedValueArray) => {
  return processPayment(resolvedValueArray);
})
.then((resolvedValueArray) => {
  return shipOrder(resolvedValueArray);
})
.then((successMessage) => {
  console.log(successMessage);
});