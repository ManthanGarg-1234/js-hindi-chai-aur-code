// // =======================
// // 1. TYPE CHECKING
// // =======================

// let score1 = 33
// let score2 = "33"
// let score3 = "33abc"

// console.log("TYPE CHECKING:")
// console.log(typeof score1) // number
// console.log(typeof score2) // string
// console.log(typeof score3) // string

// // =======================
// // 2. STRING → NUMBER
// // =======================

// console.log("\nSTRING TO NUMBER:")

// let num1 = Number(score2)   // valid numeric string
// let num2 = Number(score3)   // invalid numeric string

// console.log(num1) // 33
// console.log(num2) // NaN

// // =======================
// // 3. SPECIAL VALUES → NUMBER
// // =======================

// console.log("\nSPECIAL VALUES TO NUMBER:")

// let score4 = null
// let score5 = undefined

// console.log(Number(score4)) // 0
// console.log(Number(score5)) // NaN

// // =======================
// // 4. BOOLEAN → NUMBER
// // =======================

// console.log("\nBOOLEAN TO NUMBER:")

// let score6 = true

// console.log(Number(score6))  // 1
// console.log(Number(false))   // 0

// // =======================
// // 5. NON-NUMERIC STRING → NUMBER
// // =======================

// console.log("\nINVALID STRING TO NUMBER:")

// let score7 = "manthan"

// console.log(Number(score7)) // NaN

// // =======================
// // 6. NUMBER → BOOLEAN
// // =======================

// console.log("\nNUMBER TO BOOLEAN:")

// console.log(Boolean(1)) // true
// console.log(Boolean(0)) // false

// // =======================
// // 7. STRING → BOOLEAN
// // =======================

// console.log("\nSTRING TO BOOLEAN:")

// console.log(Boolean(""))        // false
// console.log(Boolean("manthan")) // true

// // =======================
// // 8. NUMBER → STRING
// // =======================

// console.log("\nNUMBER TO STRING:")

// let someNumber = 33
// let stringNumber = String(someNumber)

// console.log(typeof someNumber)   // number
// console.log(typeof stringNumber) // string
// console.log(stringNumber)        // "33"

// // =======================
// // 9. FINAL SUMMARY
// // =======================

// console.log("\nSUMMARY:")

// console.log('"33"        →', Number("33"))        // 33
// console.log('"33abc"     →', Number("33abc"))     // NaN
// console.log('true        →', Number(true))        // 1
// console.log('false       →', Number(false))       // 0
// console.log('null        →', Number(null))        // 0
// console.log('undefined   →', Number(undefined))   // NaN
// console.log('"manthan"   →', Number("manthan"))   // NaN

// ******************************* Operations ******************************

let value = 3;
let negValue = -value;
console.log(negValue)

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2**2);
console.log(2%2);
console.log(2^2);

let str1 = "hello";
let str2 = " manthan";
let str3 = str1 + str2;
console.log(str3);

// for all these output if not understand read ecma docs for type conversion for operations

console.log("1" + 2);

console.log(1 + "2");

console.log("1" + "2");

console.log("1" + 2 + 2);

console.log("1" + (2 + 2));

console.log(1 + 2 + "2");

console.log(+true); //valid but not good to write
// console.log(true+)  //not valid

console.log(+""); //gives 0 , valid ,  does not make any sense after writing
// console.log(""+); //similarly  this is also not valid

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;

let gameCounter = 100
gameCounter++  // study about ++gameCounter and gameCounter++ (pre and post increment and decrement)
console.log(gameCounter);

//link to study

// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion