import React from "react";
import ReactDOM from "react-dom";
//import { Teacher } from './teacher';
// classes are objects
import { Person } from './person';
import Teacher, { promote } from './teacher';
// import React, { Component } from 'react'; --> it is third party module 

// type is h1, virtual DOM
const element = <h1>Hello World</h1>;
console.log(element);

// link to public/index.html
ReactDOM.render(element, document.getElementById("root"));

//==============================================================================
// let VS var VS const

// var -> function
// let -> block
// const -> block
function sayHello() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }

    // i is still accessible
    console.log(i);

    console.log("the right way: \n");
    // it should be:
    for (let k = 0; k < 5; k++) {
        console.log(k);
    }
}
sayHello();

const x = 1;
console.log(x);
// cannot do x = 2;

//==============================================================================
// Object

const person = {
    name: "scott",
    // old way:
    //walk: function () { }

    // new way:
    walk() {},
    talk() {},
};

person.talk();
person.name = "";

const targetMember = "name";
person[targetMember.value] = "scott";

//==============================================================================
// This

const person2 = {
    name: "scott",
    // old way:
    //walk: function () { }

    // new way:
    walk() {
        // return the reference to the current object
        console.log(this);
    },
    talk() {},
};

// return person object
// if it is called in a function in an object
person2.name = "scott";
person2.walk();

// const walk is now a function
// it stores the reference of that function
// person.walk is an object
// bind it with person to avoid undefined issue
const walk = person.walk.bind(person);
console.log(walk);

// return undefined if not bind; return window object in browser; return undefined because it is in protected mode
// return the person object is bind
walk();

//==============================================================================
// arrow functions
const square = function (number) {
    return number * number;
};

// if no parameter, use ()
const square2 = (number) => {
    return number * number;
};

const square3 = (number) => number * number;

console.log(square3(5));

const jobs = [
    { id: 1, isActive: true },
    { id: 1, isActive: true },
    { id: 1, isActive: true },
];

// pass job to function and return true or false
const activeJobs = jobs.filter(function (job) {
    return job.isActive;
});
const activeJobs2 = jobs.filter((job) => job.isActive);

const person3 = {
    talk() {
        // this is the old-fashioned way
        var self = this;
        // execute after on second
        // it is a stand-alone function, so return window object
        setTimeout(function () {
            console.log("self", self);
        }, 1000);
    },
    talk2() {
        // execute after on second
        // arrow function don't rebind, so is better
        setTimeout(() => {
            console.log("this", this);
        }, 1000);
    },
};

person.talk();


//==============================================================================
// arrow maps

const colors = ['red', 'green', 'blue'];
// stupid
const item = colors.map(color => '<li>' + color + '</li>');

// render dynamically at run time
const item2 = colors.map((color) => `<i>${color}</i>`);
console.log(item2);

//==============================================================================
// object destructing 

const address = {
    street: '',
    city: '',
    country: ''
}

// stupid
const street = address.street;
const city = address.city;
const country = address.country; 
 
// equivalence with different name
const {street2:st2, city2, country2 } = address; 

//==============================================================================/
// Spread Operator

const first = [1, 2, 3];
const second = [4, 5, 6];
const combined = first.concat(second);
// three dots
const combined2 = [...first, ...second];
const combined3 = [...first, "a", ...second, "b"];

const clone = [...first];
console.log(first);
console.log(clone);

const first2 = { name: "scott" };
const second2 = { job: "developer" };
const combined4 = { ...first2, ...second, location: "australia" };
console.log(combined4);
const clone2 = { ...first }; 

//==============================================================================/
// classes and inheritance  = > modules
// like a function
const person5 = new Person('scott'); 

const teacher = new Teacher("scott", "MSE");
