//All JS basics from https://www.youtube.com/watch?v=hdI2bqOjy3c&list=PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX

//console.log (w/in browser tools to make sure code is running NOT in relation to the DOM [not displayed on actual webpage])

//Variables: let const (var is outdated) let allows change to value initially assigned. const does not. Best practice: use const unless you know for sure the value is meant to change 

// let age = 30;
// age = 31;

// console.log(age)

// let score; //can just initialize with the variable with let ONLY and set value after. 

// score = 10

// console.log(score)

//Primitive Data Types: Strings, Numbers, Boolean, null, undefined 

// const name = 'Teresa'; //String can have single or double quotes 
// const age = 21;
// const rating = 4.5; //no data type of decimals in JS, read as number 
// const isCool = true; //Boolean: true or false
// const x = null;
// const y = undefined;
// let z; 

// console.log(typeof x); //the use of typeof gives us what data type is assigned to the variable. x is NOT an object. 

//string concatenation 

// const name = 'Teresa';
// const age = 22;

// console.log('My name is ' + name + ' and I am ' + age);

//template string es6

// const hello = `My name is ${name} and I am ${age}`;

// console.log(hello)


//string methods *make index cards* methods are functions associated with an object. 

// const s = 'Hello World';

// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.substring(0,5));
// console.log(s.toLowerCase().substring(0,5));
// console.log(s.split(''));

// const s ='technology, computers, it, code';

// console.log(s.split(' '));  //makes array of words in string

//Arrays - variables that hold multiple values and zero based indexes

//array constructor method (outdated)

// const numbers = new Array(1,2,3,4,5);

// console.log(numbers)

//with brackets []

// const fruits = ['apples', 'oranges', 'pears'];

// console.log(fruits);

//pulling orange only
// console.log(fruits[1]);

//adding grapes (not best practice)
// fruits[3] = 'grapes'

// console.log(fruits)

//using push method too add mangos
// fruits.push('mangos')

// console.log(fruits);

//unshift to push to front 
// fruits.unshift('berry')

// console.log(fruits);

//remove last index using pop 
// fruits.pop();

// console.log(fruits);

//Object Literals - key/value pairs 

// const person = {
//     firstName: 'Teresa',
//     lastName: 'Malave',
//     age: 22,
//     hobbies: ['eating', 'anime', 'sleep'],
//     address: {
//         street: 'Dallas Street',
//         city: 'Dallas',
//         state: 'TX'
//     } 
// }

// console.log(person);

//pulling anime hobby
// console.log(person.hobbies[1]);

//city 
// console.log(person.address.city);

//making key into variable to pull them out of person object

// const { firstName, lastName, address: { city 
//  } } = person;

// console.log(firstName, city);

//adding property to object 
// person.email = 'dev.malave7@gmail.com'

// console.log(person);

//arrays of objects 

// const todos = [
//     {
//         id: 1,
//         text: 'action1',
//         isCompleted: true
//     },

//     {
//         id: 2,
//         text: 'action2',
//         isCompleted: true
//     },

//     {
//         id: 3,
//         text: 'action3',
//         isCompleted: false
//     },
// ];

// console.log(todos);

// console.log(todos[1].text);

//using json (send info to server)

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);

//loops (for, while, do)

// for(let i = 0; i < 10; i++) {
//     console.log(`For Loop Number: ${i}`);
// }

//while 

// let i = 0; 
// while(i <= 10) {
//     console.log(`While Loop Number: ${i}`);
//     i++;
// }


//looping through arrays (using todos array above)

// for(let i = 0; i < todos.length; i++) {
//     console.log(todos[i].text);
// }

//for of loop (much more readable) to get same results (can call todo anything, just makes most sense w/ example)
 
// for(let todo of todos) {
//      console.log(todo.text)
//  }

//high order array methods of array iteration 

//forEach, map (returns array of value you want), filter 

// todos.forEach(function(todo) {
//     console.log(todo.text);
// })


// const todoText = todos.map(function(todo) {
//     return todo.text
// });

// console.log(todoText)

// const todoCompleted = todos.filter(function(todo){ 
//     return todo.isCompleted === true;
// });

// console.log(todoCompleted);

//adding methods together (only get text of completed true todos)
// const todoCompleted = todos.filter(function(todo){ 
//         return todo.isCompleted === true;
//     }).map(function(todo){
//         return todo.text
//     });
    
//     console.log(todoCompleted);

//ternary operator- shorthand if statement to assign a variable based off a condition 

// ([if condition] [(?)THEN] 'runs if true' [(: ELSE)] 'runs if false'  )

// const x = 9;

// const color = x > 10 ? 'red' : 'blue';

// const color = 'green';

// console.log(color); 

//switch statement example

// switch(color) {
//     case 'red': 
//     console.log('color is red');
//     break;
//     case 'blue':
//     console.log('color is blue');
//     break;
//     default:
//     console.log('color is NOT red or blue');
//     break;
// }


//functions 

// const addNums = (num1 = 1, num2 = 1) => {
//     console.log(num1 + num2);
// }

// addNums(5,5);

//es6
// const addNums = num1 => num1 + 5; 

// console.log(addNums(5));

//Constructor Function 
// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
    //commented out after adding prototype 
    // this.getBirthYear = function(){
    //     return this.dob.getFullYear();
    // }
    // this.getFullName = function() {
    //     return `${this.firstName} ${this.lastName}`;
    // }
// }


//prototype (can see functions in console under proto)
// Person.prototype.getBirthYear = function() {
//     return this.dob.getFullYear();
// }

// Person.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
// }

//Class

// class Person {
//     constructor(firstName, lastName, dob) {
//         this.firstName = firstName;
//         this.lastName = lastName; 
//         this.dob = new Date(dob);
//     } 

//     //method
//     getBirthYear() {
//         return this.dob.getFullYear();
//     }

//     //method
//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }


//Instantiate object 
// const person1 = new Person('Teresa', 'Malave', '10-30-1997');
// const person2 = new Person('Terry', 'Robles', '10-30-1997');

// console.log(person1);
// console.log(person2.getFullName());
// console.log(person2.firstName); 
// console.log(person2.dob.getFullYear());


// console.log(person1.getBirthYear());
// console.log(person2.getFullName());

