//lexical scope
// "use strict"

function foo(a) {
    var b = a * 2;

    function bar(c) {
        console.log(a, b, c);
    }
    bar(b * 3);
}
foo(2); // 2, 4, 12


function foo1(str, a) {
    eval(str);
    console.log(a, b);
}

var b = 2;

foo1("var b = 3;", 1);
/* deprecated */
//doesn’t perform the optimizations
// eval();
// setTimeout();
// setInterval();

/* deprecated */
//with

var obj = {
    a: 1,
    b: 2,
    c: 3
};

// more "tedious" to repeat "obj"
obj.a = 2;
obj.b = 3;
obj.c = 4;

// "easier" short-hand
with(obj) {
    a = 3;
    b = 4;
    c = 5;
}


function foo2(obj) {
    //doesn’t perform the optimizations
    with(obj) {
        a = 2;
    }
}

var o1 = {
    a: 3
};

var o2 = {
    b: 3
};


foo2(o1);
console.log(o1.a);

foo2(o2); //this line define a variable as global
//doesn’t perform the optimizations
console.log(o2.a);
console.log(a);