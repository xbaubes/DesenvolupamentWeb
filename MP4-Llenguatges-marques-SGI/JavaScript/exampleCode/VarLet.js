/* VAR */

var MyVarNumber = 123;
if (true) {
    var MyVarNumber = 456;
}
console.log(MyVarNumber); // 456

/* LET */

let MyLetNumber = 123;
if (true) {
    let MyLetNumber = 456;
}
console.log(MyLetNumber); // 123
