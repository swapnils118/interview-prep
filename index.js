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
//  - Higher order functions
//  - What is a Single page application
//  - map, filter and reduce
//  - Polyfill for map
//  - JavaScript Object Methods
//  - Design Patterns in React

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

// ----------------------- CIRCLE QUESTIONS ----------------------

// // AREA OF CIRCLE
// const radius = [2, 4, 6, 8];

// const calculateArea = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(Math.PI * radius[i] * radius[i]);
//   }
//   return output;
// };

// console.log(calculateArea(radius));

// // CIRCUMFERENCE OF CIRCLE
// const calculateCircumference = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(2 * Math.PI * radius[i]);
//   }
//   return output;
// };

// console.log(calculateCircumference(radius));

// // Diameter of circle
// const calculateDiameter = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(2 * radius[i]);
//   }
//   return output;
// };
// console.log(calculateDiameter(radius));

// // MAKING A GENERIC FUNCTION OF ABOVE FUNCTION

// const calculate = function (radius, logic) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(logic(radius[i]));
//   }
//   return output;
// };

// // Function to calculate area
// const area = function (radius) {
//   return Math.PI * radius * radius;
// };
// // Calling
// console.log(calculate(radius, area));

// --------------------- INTERVIEW QUESTION from Jan, 2025 -------------------------
// const radio = document.querySelector("#oneWayRadio");
// const returnRadio = document.querySelector("#returnRadio");
// const returnContainer = document.querySelector("#returnContainer");
// const returnInput = document.querySelector("#returnInput");
// const submitButton = document.querySelector("#submitButton");

// // Toggle hidden class
// const toggleRadio = () => {
//   if (radio.checked) {
//     returnContainer.classList.add("hidden");
//   } else if (returnRadio.checked) {
//     returnContainer.classList.remove("hidden");
//   }
// };
// // Triggering function for initial load of page
// toggleRadio();

// // Handle toggle
// radio.addEventListener("change", toggleRadio);
// returnRadio.addEventListener("change", toggleRadio);

// // Task 4: Handle submit button click
// submitButton.addEventListener("click", () => {
//   document.getElementById("fromSpan").textContent =
//     document.getElementById("fromInput").value;
//   document.getElementById("toSpan").textContent =
//     document.getElementById("toInput").value;
//   document.getElementById("departureSpan").textContent =
//     document.getElementById("departureInput").value;

//   if (!returnContainer.classList.contains("hidden")) {
//     document.getElementById("returnSpan").textContent = returnInput.value;
//   }
// });

// ------------------------ Polyfill for map -------------------------
// Array.prototype.calculate = function (logic) {
//   let output = [];
//   for (let i = 0; i < arr.length; i++) {
//     output.push(logic(arr[i]));
//   }
//   return output;
// };

// const arr = [2, 3, 4, 5, 6];

// const area = function (radius) {
//   return Math.PI * radius * radius;
// };
// console.log(arr.calculate(area));

// -------------------------- map in practice ------------------------

// const arr = [1, 2, 3, 4, 5];

// function double(x) {
//   return x * 2;
// }

// function triple(x) {
//   return x * 3;
// }
// function binary(x) {
//   return x.toString(2);
// }

// // Calling
// const output = arr.map(binary);
// console.log(output);

// // Also if we do it with arrow function
// const output1 = arr.map((e) => e.toString(2));
// console.log(output1);

// ------------------------- filter ---------------------------------

// const arr = [1, 2, 3, 4, 5, 6];

// function oddOut(x) {
//   return x % 2 === 0;
// }

// function evenOut(x) {
//   return x % 2 !== 0;
// }

// function greaterThan4(x) {
//   return x > 4;
// }

// // Calling
// const result = arr.filter(greaterThan4);
// console.log(result);

// // Using arrow function
// const output = arr.filter((x) => x > 4);
// console.log(output);

// --------------------------- reduce ---------------------------
// // Traditional approach to sum the elements of an array
// const arr = [2, 4, 6, 8, 10];

// function sumUp(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// }
// // Calling
// const result = sumUp(arr);
// console.log(result);

// // Using reduce

// const resultReduce = arr.reduce(function (acc, curr) {
//   acc = acc + curr;
//   return acc;
// }, 0);

// console.log(resultReduce);

// // ------------------ Find the maximum number in array --------------------
// const arrNum = [1, 2, 3, 4, 5, 6, 7, 8];

// function maxNum(arr) {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

// const outputMax = maxNum(arrNum);
// console.log(outputMax);

// // By reduce method

// const maxValueUsingReduce = arrNum.reduce(function (acc, curr) {
//   if (curr > acc) {
//     acc = curr;
//   }
//   return acc;
// }, 0);

// console.log(maxValueUsingReduce);

// ------------------------ Object Methods in JavaScript --------------------

// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// // Object.Keys
// console.log(Object.keys(obj));

// // Object.Values
// console.log(Object.values(obj));

// // Object.entires
// console.log(Object.entries(obj));

// // Object.isSealed : returns true if the object is sealed, otherwise false
// const obj1 = Object.seal({ a: 1 });
// console.log(Object.isSealed(obj1));

// // Object.assign : copies the value of one or more source object to a target object
// const target = { a: 1 };
// const source = { b: 1, c: 8 };
// const source1 = { d: "section D", rollno: 1 };
// const result = Object.assign(target, source, source1);
// console.log(result);

// // Object.freeze : freezes the object from further modification
// const objName = { name: "Swapnil" };
// objName.id = 118;
// Object.freeze(objName);
// // Object will not change now
// objName.name = "Sharma";
// console.log(objName);

// // Object.seal : Restricts object from adding new values but allow to modify existing values
// const objSeal = { name: "Swapnil", id: 118, email: "swapnil118@icloud.com" };
// Object.seal(objSeal);
// // existing entries can change
// objSeal.name = "Sharma";
// // New values will not be added once we seal the object
// objSeal.age = 25;
// console.log(objSeal);

// // Object.create
// const person = {
//   greet() {
//     console.log("Hello world");
//   },
// };
// const anotherPerson = Object.create(person);
// anotherPerson.greet();

// // Object.defineProperty() : allows to define or modify one property in an object
// const objDefine = {};
// Object.defineProperty(objDefine, "name", {
//   value: "Swapnil",
//   writable: false,
// });
// console.log(objDefine);

// // Object.defineProperties() : multiple properties
// const objDefineMultiple = {};
// Object.defineProperties(objDefineMultiple, {
//   name: { value: "Sharma", writable: false },
//   age: { value: 25, writable: true },
// });
// console.log(objDefineMultiple);

// //Object.isExtensible()
// const objExtensible = {};
// console.log(Object.isExtensible(objExtensible));
// Object.preventExtensions(objExtensible);
// console.log(Object.isExtensible(objExtensible));

// // Object.isFrozen()
// const objFrozen = { name: "Swapnil", age: 21 };
// Object.freeze(objFrozen);
// console.log(Object.isFrozen(objFrozen));

// // Object.setPrototypeOf()
// const proto = {
//   greet() {
//     console.log("Hello, I am Proto");
//   },
// };
// const objProto = {};
// Object.setPrototypeOf(objProto, proto);
// objProto.greet();

// //Object.fromEntries() : Transforms a list of entries into key-value pairs into an object
// const arrEntries = [
//   ["name", "Swapnil"],
//   ["age", 22],
//   ["base", "case"],
// ];
// const objEntries = Object.fromEntries(arrEntries);
// console.log(objEntries);

// // Object.getPrototypeOf()
// const ob = {};
// console.log(ob);
// const obProto = Object.getPrototypeOf(ob);
// console.log(obProto);
// console.log(obProto === Object.prototype);
// console.log(Object.prototype);

// Use of this Keyword in arrow functions VS in traditional functions

// const button = document.getElementById("btn");
// // Using traditional function

// button.addEventListener("click", function () {
//   console.log(this);
// });

// // Using arrow function
// button.addEventListener("click", () => {
//   console.log(this);
// });

// ------------------------ JavaScript Coding Questions ---------------

// // Write a function that returns the reverse of a string
// function reverseString(string) {
//   let reversed = " ";
//   for (let i = string.length - 1; i >= 0; i--) {
//     reversed += string[i];
//   }
//   return reversed;
// }

// const resultReversed = reverseString("Swapnil");
// console.log(resultReversed);

// // Solution using JavaScript in-built methods
// function stringReverse(string) {
//   return string.split("").reverse().join("");
// }

// console.log(stringReverse("Swapnil"));

// Write a function to return the longest word in the sentence
function longestWord(sentence) {
  const words = sentence.split(" ");
  let longestWord = "";
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

console.log(longestWord("Hello, I am Swapnil Sharma"));
