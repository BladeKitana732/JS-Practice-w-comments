// console.log(window);

// alert(1);

//Selecting for the DOM(UI)
// Single element 

// console.log(document.getElementById('my-form')); //populates HTML section in console.

//can assign to variable
// const form = document.getElementById('my-form');
// console.log(form);

// console.log(document.querySelector('#my-form'));

// console.log(document.querySelector('.container'));


// Multiple element 

// console.log(document.querySelectorAll('.item')); //prints NodeList that is similar to array functionality in console. can put class/id/element

//outdated with use of getElementById/Class 
// console.log(document.getElementsByClassName('item')); //have to make it into array to manipulate through it. gives back an HTMLCollection- cant use array methods as you could do with above NodeList


//looping through NodeList 
// const items = document.querySelectorAll('.item');

// items.forEach((item) => console.log(item)); //prints out each <li></li> tag in HTML format 

//DOM Manipulation 

// const ul = document.querySelector('.items');

// ul.remove(); //whole ul is gone
// ul.lastElementChild.remove(); //removes last <li></li>
// ul.firstElementChild.textContent = 'Hello'; //changes text w/in <li></li> 
// ul.children[1].innerText = 'Brad'; //pulls 2nd <li></li> from NodeList and changes text 
// ul.lastElementChild.innerHTML = '<h1>H1 tag w/in js file printed here :) </h1>'; //pulls last <li></li> and changes it

// const btn = document.querySelector('.btn'); 
// btn.style.background = 'turquoise'; //styling with JS


//Events (takes in event parameter [e])
// btn.addEventListener('click', (e) => {
    // e.preventDefault(); //b/c its a submit btn we put this to make sure the click is shown in console and not flashed away
    // console.log('click');
// } );

//looking at event object (e)
// btn.addEventListener('click', (e) => {
//     e.preventDefault(); 
//     console.log(e.target.className) // can do just e and/or e.target
// } );

//changing color on click 
// btn.addEventListener('click', (e) => {
//         e.preventDefault(); 
//         document.querySelector('#my-form').style.background = 'indigo';
//         document.querySelector('.items').lastElementChild.innerHTML = '<h1>I changed!</h1>'
// });


//making it a functional little UI 

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users'); 

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    // console.log(nameInput);//just prints out HTML layout

    // console.log(nameInput.value); //prints what user actually puts inside 

    //setting if statement to print only if both have text in it 
    if(nameInput.value === '' || emailInput.value === '') {
        msg.innerHTML = 'Please enter all fields'; 

        setTimeout(() => msg.remove(), 3000); 
    } else {
        //creating element to insert into DOM 
        const li = document.createElement('li');
        //appendChild is adding something inside of <li></li>/ this is our textNode
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`)); //w/ just this nothing will happen although this is set up to do so b/c we need to append the created element li to the ul element 

        userList.appendChild(li);

        //clear fields 
        nameInput.value = '';
        emailInput.value = '';
    }
 

}

