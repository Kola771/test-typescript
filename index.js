"use strict";
function sum(a, b) {
    return a + b;
}
let arr = [1, 2, 3];
let arr2 = [1, 2, 3];
let arr3 = [1, 'a', false];
let arr4 = [1, 'a', false];
function returnval(arg) {
    return arg;
}
// fonction générique qui peut prendre et retourner un type bizarre
function returnval2(arg) {
    return arg;
}
console.log(returnval(1));
console.log(returnval2(1));
console.log(returnval2("1"));
console.log(returnval2(false));
