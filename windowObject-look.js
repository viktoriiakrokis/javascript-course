//WINDOW METHODS / OBJECTS / PROPERTIES


//Alert
//alert('Hello World!');

//Promt  стрічка для запросу що ввести як алерт потім можна вивести як алерт
//const input = prompt();
//alert(input);

//Confirm it ask smth(like alert) and after give some answer
//if(confirm('Are you sure')){
//  console.log('Yes');
//} else {
//  console.log('No');
//}

let val;

//Outter height and width (full of window)
val = window.outerHeight;
val = window.outerWidth;

//Inner height and width (inside window)
val = window.innerHeight;
val = window.innerWidth;

//Scroll points(if you scroll up how long is page)
val = window.scrollY;
val = window.scrollX;

//Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

//Redirect
//window.location.href = 'http://google.com';

//Reload page
//window.location.reload();

//History Object
//window.history.go(-5);
val = window.history.length;

//Navigator Object
val = window.navigator;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);
