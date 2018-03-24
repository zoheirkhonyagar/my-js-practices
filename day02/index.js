"use strict"

function foo() {
    console.log(b);
}

var b = 2;

foo();

// var c = 33;

function foo1(a) {
    console.log(a + b);
    var c = a;
}

foo1(2);