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
//  - What is React Router
//  - Why do we need React Router
//  - How is React Routing different from Conventional Routing
//  - How do we implement React Routing
//  - First class functions
//  - Call, apply and bind
//  - Polyfill for bind method
//  - Debouncing
//  - Polyfill for debouncing
//  - Throttling
//  - Debouncing vs Throttling
//  - Currying function
//  - async and defer attribute
//  - Event bubbling and event capturing
//  - Event delegation
//  - Prototype and Prototypal inheritance
//  - Session and local storage
//  - Attributes in HTML
//  - Why markup language is important
//  - How HTML is different from XML
//  - Basic building blocks of HTML
//  - Purpose of attributes in HTML tags
//  - Why we use external CSS file? What's the use?

//           ---------------------- END  --------------------------

// // ---------------------- CLOSURE EXAMPLE --------------------
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

// // ------------------ CALLBACK FUNCTION -------------------------------

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

// // --------------- CLOSURE DEMO WITH EVENT LISTENERS ---------------------

// function attachEventListener() {
//   let count = 0;
//   document.getElementById("clickMe").addEventListener("click", function s() {
//     console.log("Button clicked", count++);
//   });
// }

// attachEventListener();

// -------------------- Call, apply and bind ----------------------

// // Call
// let name = {
//   firstName: "Swapnil",
//   lastName: "Sharma",
//   printFullName: function (city, country) {
//     console.log(
//       this.firstName + " " + this.lastName + " from " + city + ", " + country
//     );
//   },
// };

// name.printFullName.call(name, "Jammu", "India");

// let name2 = {
//   firstName: "Mark",
//   lastName: "Hill",
// };
// // FUNCTION BORROWING
// name.printFullName.call(name2, "California", "USA");

// // apply
// name.printFullName.apply(name2, ["Cali", "States"]);

// // bind
// let myName = name.printFullName.bind(name, "Jammu", "IN");
// myName();

//------------------ POLYFILL FOR BIND METHOD ----------------------

// // Regular example of bind method
// let name = {
//   firstName: "Swapnil",
//   lastName: "Sharma",
// };

// let printFullName = function (hometown, country) {
//   console.log(
//     this.firstName + " " + this.lastName + ", " + hometown + ", " + country
//   );
// };

// let printName = printFullName.bind(name, "Jammu");
// printName("IND");

// // Our own implementation of traditional bind method and we are naming it mybind
// Function.prototype.mybind = function (...args) {
//   let obj = this;
//   params = args.slice(1);
//   return function (...args2) {
//     obj.apply(args[0], [...params, ...args2]);
//   };
// };

// let printName2 = printFullName.mybind(name, "Jammu");
// printName2("IND");

// ---------------------------- DEBOUNCING ------------------------------
// let count = 0;
// const getData = () => {
//   console.log("Typing event", count++);
// };
// // Debouncing implementation
// const debounce = function (fn, delay) {
//   let timer;
//   return function () {
//     let context = this;
//     let args = arguments;
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn.apply(context, args);
//     }, delay);
//   };
// };

// const debounced = debounce(getData, 400);

// ---------------------------- CURRYING FUNCTION -----------------------

// let multiply = function (x, y) {
//   console.log(x * y);
// };

// // WITH BIND METHOD
// let multiplyByTwo = multiply.bind(this, 2);
// multiplyByTwo(3);

// let multiplyByThree = multiply.bind(this, 3);
// multiplyByThree(3);

// WITH CLOSURES
// let multiply = function (x) {
//   return function (y) {
//     console.log(x * y);
//   };
// };

// let multiplyByTwo = multiply(2);
// multiplyByTwo(2);

// let multiplyByThree = multiply(3);
// multiplyByThree(2);

// ------------------- EVENT BUBBLING AND EVENT CAPTURING ----------------

// document.querySelector("#grandparent").addEventListener(
//   "click",
//   () => {
//     console.log("Grandparent clicked");
//   },
//   false
// );

// document.querySelector("#parent").addEventListener(
//   "click",
//   () => {
//     console.log("Parent clicled");
//   },
//   false
// );

// document.querySelector("#child").addEventListener(
//   "click",
//   () => {
//     console.log("Child clicked");
//   },
//   false
// );

// ---------------------- EVENT DELEGATION ---------------------------

// document.querySelector("#container").addEventListener("click", (e) => {
//   console.log(e.target.id);
//   if (e.target.tagName == "LI") {
//     window.location.href = e.target.id;
//   }
// });

// -------------------- PROTOTYPE AND PROTOTYPAL INHERITANCE --------------
// // Creating a parent object as a prototype
// const parent = {
//   greet: function () {
//     console.log("Hello from Parent");
//   },
// };

// // Creating a child object
// const child = {
//   name: "Child object",
// };

// // Performing prototype inheritance
// child.__proto__ = parent;

// // Accessing the method from the parent prototype
// child.greet();

// --------------------------- PROBLEM -----------------------
// // sum(1)(2)(3)(4)... ()

// let sum = function (a) {
//   return function (b) {
//     if (b) {
//       return sum(a + b);
//     }
//     return a;
//   };
// };
// console.log(sum(1)(2)(3)(4)());
