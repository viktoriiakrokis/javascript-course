let val;

val = document;
val = document.all;
val = document.all[0];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;//give the local host
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms;//get forms
val = document.forms[0];
val = document.forms;//get staff from the form
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0];

val = document.images;//get images
val = document.scripts;// get script documents
val = document.scripts[2].getAttribute('src');

let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script){
  console.log(script.getAttribute('src'));
});

console.log(val);