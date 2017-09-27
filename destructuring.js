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


 /*********************
  *  DEFAULT PARAMETERS
  *********************/

// Usual handle of default values
let doSomething = function(name) {
    name = name || 'Aileen';
    return name;
};

console.log('Usual Default parameter ' + doSomething());

//With ES6 default parameter only assigns with undefined value
let doSomethingEs6 = function(name = 'Aileen') {
    return name;
}

console.log('ES6 Default parameter ' + doSomething());

 /*********************
  *  REST PARAMETERS
  *********************/

//Rest parameter takes arguments to build an array
let sum = function(name, ...numbers) {
    let result = 0;
    numbers.forEach(function(n) {
        result += n;
    });
    return result;
}

let result = sum('Aileen', 1,2,3);

console.log('Rest parameter result is 6 ' + result);

 /*********************
  *  SPREAD OPERATOR
  *********************/

  //can build arrays by embeding

  let a = [4,5,6];
  let b = [1,2,3,...a,7,8,9];


  console.log('Should build an array from 1 to 9 ' + b);

   /*********************
  * TEMPLATE LITERALS
  *********************/

  // Usual concatenation

  let category = 'comedy';
  let id = 1711;

  let url = 'http://coolmovies/' + category + '/' + id;

  //Replace concatenation with placeholders

  let genre = 'Alternative';
  let id = 1117;

  let url = `http://coolmusic/${genre}/${id}`;

