const num1 = 100;
const num2 = 50;
let val;

//Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

//Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.4);//round
val = Math.ceil(2.4);//rounds to a larger
val = Math.floor(2.8);//rounds to smaller
val = Math.sqrt(64);//sqrt 
val = Math.abs(-3);//absolute number
val = Math.pow(8, 2);//make power
val = Math.min(2,33,4,1,55,6,3);//return minimum
val = Math.max(2,33,4,1,55,6,3);//return maximum
val = Math.random();//produce random decimals
val = Math.random() * 20;//produce random from 0 to 19
val = Math.floor (Math.random() * 20 + 1);//random number 1-20


console.log(val);