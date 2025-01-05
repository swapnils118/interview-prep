//         --------------- SOME IMPORTANT TOPICS --------------------
//  - First Class Functions
//  - Callback functions and Event Listeners
//  - Asynchronous JavaScript and Event Loop
//  - Execution context, Global execution context and Call Stack
//  - Hoisting
//  - Scope, Scope chain and Lexical environment
//  - Features of React
//  - Difference between virtual and real DOM
//  - Can web browsers read JSX directly
//  - What is React router
//  - Why do we need React router
//  - How is React routing different from Conventional routing
//  - What are props in React
//  - How we pass props between components
//  - Differences between state and props
//  - Difference between Class and Functional component
//  - Lifecycle methods of component
//  - What is Redux
//  - Components of Redux
//  - What is a Flux
//  - How is Redux different from Flux
//  - Difference between Redux and Context Api
//  -

//           ---------------------- END  --------------------------

// // ---- CLOSURE EXAMPLE ----
// // Case 1:
// function outer() {
//   var a = 10;

//   function inner() {
//     console.log(a);
//     // var a = 100 will give undefined here because of hoisting because wen are trying to access a before initialization here in local scope
//   }
//   var a = 20;
//   return inner;
// }
// // Global
// var a = 30;
// // Function call
// var result = outer();
// result();

// // Case 2:
// function outer1() {
//   // var a = 10;

//   function inner1() {
//     console.log(a);
//   }
//   // var a = 20;
//   return inner1;
// }
// // Global
// var a = 30;

// // Function call
// var result1 = outer1();
// result1();

// // Case 3: Closure with Hoisting(output: undefined because of hoisting in local scope)
// function outer2() {
//   // var a = 20;
//   function inner2() {
//     console.log(a);
//     var a = 10;
//   }
//   return inner2;
// }
// // Global
// var a = 30;

// // Function call
// var result2 = outer2();
// result2();

// // Case 4:
// function outer3() {
//   // var a = 20;
//   function inner3() {
//     var a = 10;
//     console.log(a);
//   }
//   return inner3;
// }
// // Global
// var a = 30;

// // Function call
// var result3 = outer3();
// result3();

// // ---- CALLBACK FUNCTION ----

// setTimeout(function () {
//   console.log("This is a Callback function with a timer");
// }, 4000);

// function a(x) {
//   console.log("I am function 'a'");
//   x();
// }

// a(function x() {
//   console.log(
//     "I am going to be an argument to function 'a'. Refer me as callback function"
//   );
// });

// // ---- CLOSURE DEMO WITH EVENT LISTENERS ----

// function attachEventListener() {
//   let count = 0;
//   document.getElementById("clickMe").addEventListener("click", function s() {
//     console.log("Button clicked", count++);
//   });
// }

// attachEventListener();
