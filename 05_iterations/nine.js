// =====================================
// MAP, FILTER, REDUCE (CORE JS METHODS)
// =====================================

// -------------------------------------
// 1. MAP()
// -------------------------------------
// PURPOSE:
// Transform each element of an array

// SYNTAX:
array.map((element, index, array) => {
  return newValue;
});

// EXAMPLE:
let nums = [1, 2, 3, 4];

let doubled = nums.map((num) => {
  return num * 2;
});

console.log(doubled); // [2, 4, 6, 8]

// KEY POINTS:
// - Always returns NEW array
// - Length remains SAME
// - Used for transformation

// -------------------------------------
// 2. FILTER()
// -------------------------------------
// PURPOSE:
// Select elements based on condition

// SYNTAX:
array.filter((element, index, array) => {
  return condition; // true or false
});

// EXAMPLE:
let numbers = [1, 2, 3, 4, 5, 6];

let even = numbers.filter((num) => {
  return num % 2 === 0;
});

console.log(even); // [2, 4, 6]

// KEY POINTS:
// - Returns NEW array
// - Length can CHANGE
// - Keeps elements where condition = true

// -------------------------------------
// 3. REDUCE()
// -------------------------------------
// PURPOSE:
// Reduce array to a SINGLE value

// SYNTAX:
array.reduce((accumulator, currentValue, index, array) => {
  return updatedAccumulator;
}, initialValue);

// EXAMPLE 1: Sum
let arr = [1, 2, 3, 4];

let sum = arr.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(sum); // 10

// EXAMPLE 2: Product
let product = arr.reduce((acc, curr) => acc * curr, 1);

console.log(product); // 24

// KEY POINTS:
// - Returns SINGLE value
// - Needs accumulator
// - initialValue is IMPORTANT

// -------------------------------------
// 4. CHAINING (IMPORTANT)
// -------------------------------------

let data = [1, 2, 3, 4, 5, 6];

// Step 1: double
// Step 2: filter > 5
// Step 3: sum

let result = data
  .map((num) => num * 2) // [2,4,6,8,10,12]
  .filter((num) => num > 5) // [6,8,10,12]
  .reduce((acc, curr) => acc + curr, 0); // 36

console.log(result);

// -------------------------------------
// 5. WHEN TO USE WHAT (IMPORTANT)
// -------------------------------------

// map  → when transforming data
// filter → when selecting data
// reduce → when combining data

// -------------------------------------
// 6. COMMON MISTAKES (YOUR LEVEL)
// -------------------------------------

// ❌ Using map when filtering needed
// ❌ Forgetting return in arrow function
// ❌ Not giving initial value in reduce
// ❌ Confusing accumulator and current value

// -------------------------------------
// 7. QUICK DIFFERENCE TABLE
// -------------------------------------

// map:
// input  → array
// output → array (same size)

// filter:
// input  → array
// output → array (smaller or same)

// reduce:
// input  → array
// output → single value

// -------------------------------------
// END
// -------------------------------------
