// multiple promises which can be executed simultaneously is to await a Promise.all()
async function asyncPromAll() {
  const resultArray = await Promise.all([asyncTask1(), asyncTask2(), asyncTask3(), asyncTask4()]);
  for (let i = 0; i<resultArray.length; i++){
    console.log(resultArray[i]); 
  }
}

// exercise 
let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./library.js')

// Write your code below:
async function serveDinnerAgain(){
  let foodArray = await Promise.all([steamBroccoli(), cookRice(), bakeChicken(), cookBeans()]);
let vegetable = foodArray[0];
let starch =  foodArray[1];
let protein =  foodArray[2];
let side =  foodArray[3];

console.log(`Dinner is served. We're having ${vegetable}, ${starch}, ${protein}, and ${side}.`);
}

serveDinnerAgain();