let val;
//print current date
const today = new Date();
let birthday = new Date('9-10-1981 11:25:00');
birthday = new Date('September 10 1981 11:25:00');
birthday = new Date('9/10/1981 11:25:00');

val = today.getMonth();//count from 0
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

//change some data
birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);

console.log(birthday);
//type of time is Object
//console.log (typeof val);
//We can change data type for exemple to String
//val = today.toString();
