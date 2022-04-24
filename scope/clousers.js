var b = 1; // b is define
function someFunction(number) { // some function === 5
    function otherFunction(input) { // other function === b
        return b;
    }
    b = 5; // reassign
    return otherFunction;
}
var firstResult = someFunction(9); // first result === 5
var result = firstResult(2); // === 5
console.log(firstResult(2))
var a = 1; // a is define
function b2() {
    a = 10; // a is reassign only in function
    return

    function a() {}
}
b2();
console.log(a); // logs 1
let i;
for (i = 0; i < 3; i++) {
    const log = () => {
        console.log(i);
    }
    setTimeout(log, 100);
}