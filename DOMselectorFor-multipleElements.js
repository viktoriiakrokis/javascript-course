//document.getElementsByClassName

//const items = document.getElementsByClassName('collection-item');
//console.log(items);
//console.log(items[0]);
//items[0].style.color = 'red';
//items[3].textContent = 'Blablabla';

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

console.log(listItems);

//document.getElementsByTagName
let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);
lis[1].style.color = 'red';
lis[3].textContent = 'Hello';

//Conver HTML into Array
lis = Array.from(lis);

lis.reverse();

lis.forEach(function(li, index){
  console.log(li.className);
  li.textContent = `${index}: Hello`;//change text content in all elements with same classes
})

console.log(lis);

//document.querySelectorAll
const items = document.querySelectorAll('ul.collection li.collection-item');//NodeList

items.forEach(function(item, index){
  item.textContent = `${index}: Mimi`;
})

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li, index){
  li.style.background = '#ccc';
})

for(let i = 0; i < liEven.length; i++){
  liEven[i].style.background = '#f4f4f4';
}

console.log(items);