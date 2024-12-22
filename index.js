// CLOSURE Example
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
