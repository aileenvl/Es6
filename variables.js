'use strict'

// Let gives true block scoping

var doSomethingVar = function(param) {
    if(param) {
        var x = 5;
    }
    return x;
};

console.log(doSomethingVar(true));

var doSomethingLet = function(param) {
    if(param) {
        let x = 5;
    }
    return x;
};

console.log(doSomethingLet(true));


//Const creates an initialize and read only variable holding a constant value and never change it has block scoping

const MAX_VALUE = 20;

MAX_VALUE = 10;

