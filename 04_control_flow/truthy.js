// const userEmail = []
// // const userEmail = {}
// // const userEmail = ""
// // const userEmail = "manthang046@gmail.com"

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }

// // falsy values
// // false, 0, -0, BigInt 0n, "", null, undefined, NaN

// // truthy values
// // "0", 'false', " ", [], {}, function(){}

// // if (userEmail.length === 0) {
// //     console.log("Array is empty");
// // }

// // more better way to check 

// // if (userEmail.length === 0) {
// //     console.log("Array is empty");
// // }

// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {   // Object.keys(emptyObj) return array so we check it's length
//     console.log("Object is empty");
// }

// false == 0 is true
// false == '' is true
// 0 == '' is true


// Nullish Coalescing Operator (??): (for null and undefined)

let val1;
// val1 = 5 ?? 10  //5
// val1 = null ?? 10  //10
// val1 = undefined ?? 15  //15
// val1 = null ?? 10 ?? 20  //10 (fiurst value always)
// val1 = null ?? undefined  // undefiend
// val1 = undefined ?? null  // null


console.log(val1); // if all above are commented then it prints undefined


// Terniary Operator

// Basic Syntax :- condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

