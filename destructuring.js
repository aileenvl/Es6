'use strict'


//assign values to a set of variables 


let a = 1;
let b = 5;

//give variables a and b the values a =  value of b and b =  value of a 
[a, b] = [b,a];


console.log('value a ' + a);
console.log('value b ' + b);

//declares and assign values to variables
let [c, d] = [4, 15];

console.log('value c ' + c);
console.log('value d ' + d);


///To skip a value add comma

let values = function(){
    return [7,10,15];
};

let [, e, f] = values();

//Object assigment

let retrieveObject = function() {
    return {
        firstName: "Aileen",
        lastName: "Villanueva",
        age: 26
    }
}

//Assign object values to variables
let {firstName: Name, lastName: LastName} = retrieveObject();

console.log('Name is ' + Name);
console.log('LastName is '+ LastName);
