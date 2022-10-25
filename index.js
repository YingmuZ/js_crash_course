//var, let, const (let & const have a block-level scope)

//datatype: string, numbers, boolean, null, undefined, symbol

const name = 'Zoey';
const age = 24;
const isCool = true;
let z;
console.log(typeof isCool);
console.log(typeof z);

//concatenation
console.log('my name is ' + name + ' and i am ' + age);
// template string
console.log(`my name is ${name} and i am ${age}`);

//properties and methods of string

const s = 'hello world';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0, 5).toUpperCase());
console.log(s.split(''));

const t = 'technology, computers, it, code';
console.log(t.split(', '));   // - have the array then

//arrays - variables that hold multiple values

const numbers = new Array(1,2,3,4,5); //here, this "new" is the constructor
console.log(numbers);

const fruits = ['apples', 'oranges', 'pears'];
console.log(fruits);
console.log(fruits[1]);
fruits.push('mango');
fruits.unshift('strawberries');

console.log(Array.isArray(fruits));
console.log(Array.isArray('string or not'));
console.log(fruits.indexOf('oranges'));

//object - key value pairs

const person = {
    firstName: 'Zoey',
    lastName: 'Z',
    age: 24,
    hobbies: ['horror films', 'journal', 'yoga'],
    address: {
        street: '50 main st',
        city: 'ROTTERDAM',
        state: 'NETHERLANDS',
    }
}

console.log(person.firstName);
console.log(person.hobbies[1]);
console.log(person.address.city);

//destructuring_ create variables
const { firstName, lastName } = person; //pulling these out of this person object
console.log(firstName);
//regarding the embedded object, it can be like:
const { address: { city }} = person;
console.log(city);

//we can also add properties
person.email = 'zoey@gmail.com';


//most of times, we are dealing with arrays of objects
const todos = [
    {
        id: 1,
        text: 'take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'journal',
        isCompleted: false
    },
];

todos.forEach((todo) => console.log(todo)); // to be rethought

console.log(todos[1].text);

// json, www.freeformatter.com
// when using api sending data to and receiving from a server

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);


// for loop
for(let i = 0; i <= 10; i++) {
    console.log(`for loop number: ${i}`);
}

//while
let i = 0;
while(i < 10) {
    console.log(`while loop number: ${i}`);
    i++;
}

//to loop through an array (上面的todos)
for(let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}

//other ways to loop through an array "for of loop"
for(let todo of todos) {
    console.log(todo.text);
}

//high order array methods,
//1. forEach, loop through them; 
//2. map, create a new array from an array
//3. filter, create a new array based on a condition

todos.forEach(function(todo){
    console.log(todo.text);
});

const todoText = todos.map(function(todo){
    return todo.text;
});
console.log(todoText); //turns out an array

const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
});
console.log(todoCompleted);

const todoCompleted_text = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
});


todos.forEach((todo) => console.log(todo));


//conditionals
/* 
if(){

 } else if(){

} else {

}; 

|| or
&& and 

*/

/* ternary operator 
- a shorthand if statement and its used a lot to 
assign variables based on a condition */
const x = 10;
const color = x > 10 ? 'red' : 'blue';
console.log(color);

/* switches
- which is another way to evaluate a condition */
switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
        break;
}

function addNums (num1, num2){
    return num1 + num2;
}
console.log(addNums(5, 5));

//arrow function

const addNums = (num1, num2) => num1 + num2;
/* or bring the parentheses back
const addNums = (num1, num2) => {
    return num1 + num2;
}
*/
console.log(addNums(5, 5));

const addNum = num => num + 5;
console.log(addNum(6));

todos.forEach((todo) => console.log(todo));


//object-oriented programming
//constructor function
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);   //here the date constructor
    // this.getBirthYear = function(){
    //     return this.dob.getFullYear();
    // }
    // this.getFullName = function(){
    //     return `${this.firstName} ${this.lastName}`;
    // }
}

Person.prototype.getBirthYear = function(){
    return this.dob.getFullYear();
}
Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}

// class with method [its doing the same thing as the above, just a prettier way]
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob); 
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}



//instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1978');

console.log(person2.dob);
// console.log(person1.getBirthYear());
// console.log(person1.getFullName());
console.log(person1);




//DOM
//single element
console.log(document.getElementById('my-form'));
const form = document.getElementById('my-form');

console.log(document.querySelector('.container'));
console.log(document.querySelector('h1'));

//multiple element
console.log(document.querySelectorAll('.item'));
console.log(document.getElementByClassName('item'));
console.log(document.getElementByTagName('li'));

const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));

//manipulate with DOM
const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'hello';
ul.children[1].innerHTML = 'brad';

const btn = document.querySelector('.btn');
btn.style.background = 'red';

//event
btn.addEventListener('click', (e) =>{
    e.preventDefault();
    // console.log('click');
    // console.log(e.target);
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
});

//other events such as 'mouseover' 'mouseout'


const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    // console.log(nameInput.value);

    if(nameInput.value === '' || emailInput.vlaue === '') {
        msg.classList.add('error');
        msg.innerHTML = 'please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    } else {
        // console.log('success');
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        //clear field
        nameInput.value = '';
        emailInput.value = '';
    }




}