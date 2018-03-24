// "use strict"
//use strict mode is for safer code and reduce errors in define variables or something else

var a = 2;
console.log(a);

/* ---------- functions ---------- */
//anonymuse function
var c = function(){
    return 0;
}

console.log(c());

//named function
var x = function foo(){
    return 0;
};

console.log(x());

console.log(c , x);

//
(function foo(){
    console.log(0);
}) ();

var e = (function foo(){
    return 1;
}) ();

console.log(e);

var zoheir = "zoheir";

function zoheir1()
{
    let zoheir = 3;
    console.log(zoheir);
}

zoheir1();

console.log(zoheir);

/* introduction to closure */

function makeAdder(x) {
    // parameter `x` is an inner variable
    // inner function `add()` uses `x`, so
    // it has a "closure" over it
    function add(y) {
        return y + x;
    };
    return add;
}

var plusOne = makeAdder(1);

// `plusOne` gets a reference to the inner `add(..)`
// function with closure over the `x` parameter of
// the outer `makeAdder(..)`
var plusOne = makeAdder(1);
// `plusTen` gets a reference to the inner `add(..)`
// function with closure over the `x` parameter of
// the outer `makeAdder(..)` Functions as Values

var plusTen = makeAdder(10);
plusOne(3);
plusOne(41); // 4 <-- 1 + 3
// 42 <-- 1 + 41
plusTen(13); // 23 <-- 10 + 13

function makeMultiplexer(x) {
    
    function multi(y) {
        return x * y;
    }

    return multi;
}

var multipleTen = makeMultiplexer(10);

console.log(multipleTen(2));

/* ------- use case of closures  -------- */

function User() {
    var username , password;

    function doLogin(user , pw) {
        username = user;
        password = pw;
    }

    function doPrint() {
        console.log("username : " + username + " password : " + password);
    }

    var publicApi = {
        login: doLogin , 
        print: doPrint
    };

    return publicApi;

}

var zoheir = User();
zoheir.login("zoheir" , "123456");
zoheir.print();



/* this keyword */

function foo() {
    console.log(this.bar);
}
var bar = "global";
var obj1 = {
    bar: "obj1",
    foo: foo
};
var obj2 = {
    bar: "obj2"
};
// --------

foo();

obj1.foo();

foo.call(obj2);


/* prototypes */

var foo = {
    a: 32
};

var bar = Object.create(foo);

bar.b = "Hello World !";

