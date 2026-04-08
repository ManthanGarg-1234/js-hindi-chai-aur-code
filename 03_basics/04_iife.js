// ==============================
// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)
// ==============================

// --------------------------------------
// 1. WHAT IS IIFE?
// --------------------------------------
// A function that is:
// 1. Defined
// 2. Executed immediately

(function () {
  console.log("IIFE runs immediately");
})();

// --------------------------------------
// 2. WHY IIFE IS USED
// --------------------------------------

// (A) Avoid Global Scope Pollution
// Variables inside IIFE are NOT accessible outside

(function () {
  var a = 10;
  var b = 20;
})();

// console.log(a); // ERROR
// console.log(b); // ERROR

// (B) Create Private Variables (Encapsulation)

const result = (function () {
  let secret = 42;
  return secret;
})();

console.log(result); // 42
// console.log(secret); // ERROR

// (C) Run Code Immediately (Initialization)

(function () {
  console.log("App initialized");
})();

// (D) Avoid Naming Conflicts

(function () {
  let user = "hitesh";
  console.log(user);
})();

// Even if another "user" exists globally → no conflict

// (E) Closures with IIFE (IMPORTANT)

const counter = (function () {
  let count = 0;

  return function () {
    return ++count;
  };
})();

console.log(counter()); // 1
console.log(counter()); // 2

// --------------------------------------
// 3. SYNTAX EXPLANATION (IMPORTANT)
// --------------------------------------

// Normal function (DECLARATION) → cannot run immediately
function test() {}

// Convert to EXPRESSION using parentheses
(function () {
  console.log("Now it's an expression");
})();

// --------------------------------------
// 4. TYPES OF IIFE
// --------------------------------------

// (A) Named IIFE
(function chai() {
  console.log("DB CONNECTED");
})();

// Name is optional and used only for debugging

// (B) Arrow Function IIFE
((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("hitesh");

// --------------------------------------
// 5. SEMICOLON ISSUE (CRITICAL)
// --------------------------------------

// WRONG (can break execution)
// (function () {})()
// (function () {})() // ❌

// CORRECT
(function () {})();
(function () {})();

// --------------------------------------
// 6. MODERN JAVASCRIPT REALITY
// --------------------------------------

// IIFE is LESS USED now because:

// (A) Block Scope (let, const)
{
  let a = 10;
}
// console.log(a); // ERROR

// (B) Modules (import/export)
// File-based encapsulation replaces IIFE

// --------------------------------------
// 7. WHEN TO USE IIFE
// --------------------------------------

// ✔ Immediate execution needed
// ✔ Avoid global variables in older JS
// ✔ Create private state (closures)
// ✔ Legacy codebases

// --------------------------------------
// 8. WHEN NOT TO USE IIFE
// --------------------------------------

// ❌ When using modern JS (let, const)
// ❌ When using modules
// ❌ When simple block scope works

// --------------------------------------
// 9. CORE CONCEPTS YOU MUST UNDERSTAND
// --------------------------------------

// If you don't understand these, IIFE is useless:

// → Scope (global, function, block)
// → Closures
// → Execution Context

// --------------------------------------
// 10. FINAL TAKEAWAY
// --------------------------------------

// IIFE = tool for:
// - isolation
// - immediate execution
// - encapsulation

// But modern JS gives better alternatives.
// Don't overuse it blindly.
