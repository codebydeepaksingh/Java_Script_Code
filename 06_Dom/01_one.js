// const title = document.querySelector('#title');

// // console.log(title);

// title.style.backgroundColor = "red"

// title.style.borderRadius = "20px"

// title.style.padding = "20px"

// title.getAttribute('class');
// title.getAttribute('id');

// title.innerHTML
// title.innerText
// title.textContent

// document.querySelector('h1');
// document.querySelector('#title')
// document.querySelector('.heading')


// document.querySelector('ul')
// //<ul>​…​</ul>​
// const myul = document.querySelector('ul')

// undefined
// myul.querySelector('li')
// //<li>​…​</li>​
// const pink = myul.querySelector('li')
// undefined
// pink.style.backgroundColor = 'pink'
// // 'pink'
// pink.innerText = "Deepak"
// // 'Deepak'


// const liList = document.querySelectorAll('li')
// //undefined
// liList.style.color = "green"
// liList[0].style.color = "green"
// //'green'

// liList.forEach((l)=>l.style.color = 'red')


// document.getElementsByClassName('list')
// //HTMLCollection(4) [li.list, li.list, li.list, li.list]0: li.list1: li.list2: li.list3: li.listlength: 4[[Prototype]]: HTMLCollectionitem: ƒ item()length: (...)namedItem: ƒ namedItem()constructor: ƒ HTMLCollection()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "HTMLCollection"get length: ƒ length()[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
// const temp = document.getElementsByClassName('list')
// //undefined
// Array.from(temp)
// //(4) [li.list, li.list, li.list, li.list]0: li.list1: li.list2: li.list3: li.listlength: 4[[Prototype]]: Array(0)
// arr = Array.from(temp)
// //(4) [li.list, li.list, li.list, li.list]
// arr.map((li)=>li.style.color = 'red')
// //(4) ['red', 'red', 'red', 'red']


const parent = document.querySelector('.parent')
// console.log(parent);
// console.log(parent.children);
// console.log(parent.children[0].innerText);

// for (let i = 0; i < parent.children.length; i++) {
//     console.log(parent.children[i].textContent);    
    
// }


// console.log(parent.firstElementChild)

// console.log(parent.lastElementChild)

const dayOne = document.querySelector('.day');
// console.log(dayOne);

// console.log(dayOne.nextElementSibling);
console.log(parent.childNodes);




