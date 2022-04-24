function funcA() {
    console.log(a); // a is undefined 

    console.log(foo());
    var a = 1;

    function foo() { // log foo()===2
        return 2;
    }
}
funcA(); // call funcA
function funcB() {
    let a = b = 0; // a will be 0
    a++; // a will be 1
    // b is undefined
    return a;
}
funcB(); // call funcB
console.log(typeof a);
console.log(typeof b);



var fullName = 'John Doe';
var obj = {
    fullName: 'Colin Ihrig',
    prop: {
        fullName: 'Aurelio De Rosa',
        getFullName: function() {
            return this.fullName;
        }
    }
};
console.log(obj.prop.getFullName()); // function === Aurelio de Rosa
var test = obj.prop.getFullName; // getFullName is undefined
console.log(test());

function funcC() {
    console.log("1"); // define func
}
funcC(); // call func 1

function funcC() {
    console.log("2"); // new define for funcC
}
funcC(); // call funcC second time


function funcD1() {
    d = 1; // d is define in global
}
funcD1();
console.log(d); // logs d
function funcD2() {
    var e = 1;
}
funcD2();
// console.log(e); // e is undefined


function funcE() {
    console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f); // f is undefined
var f = 1; // f is defined in global
funcE(); // log funcE