// CLOSURE Example
// Case 1:
function outer() {
  var a = 10;

  function inner() {
    console.log(a);
  }
  var a = 20;
  return inner;
}
// Global
var a = 30;
// Function call
var result = outer();
result();

// Case 2:
function outer1() {
  // var a = 10;

  function inner1() {
    console.log(a);
  }
  // var a = 20;
  return inner1;
}
// Global
var a = 30;

// Function call
var result1 = outer1();
result1();

// Case 3: Closure with Hoisting(output: undefined because of hoisting in local scope)
function outer2() {
  // var a = 20;
  function inner2() {
    console.log(a);
    var a = 10;
  }
  return inner2;
}
// Global
var a = 30;

// Function call
var result2 = outer2();
result2();

// Case 4:
function outer3() {
  // var a = 20;
  function inner3() {
    var a = 10;
    console.log(a);
  }
  return inner3;
}
// Global
var a = 30;

// Function call
var result3 = outer3();
result3();
