//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);  //false

const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

// key-value pairs in objects
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myObj);
console.log(typeof myFunction);
console.log(typeof id);
console.log(typeof anotherId);
console.log(typeof bigNumber);
console.log(typeof heros);

// read from here 

// https://262.ecma-international.org/5.1/#sec-11.4.3



// ***********************Memory Allocation**************************

//  JavaScript Memory: Stack (for primitives) vs Heap (for non primitives)

//  Core Difference

// | Type | Behavior | Stored As |
// |------|--------|----------|
// | Primitive | Copy | Value |
// | Non-Primitive | Reference | Address |


let myYoutubename = "hiteshchoudharydotcom"

let anotherName = myYoutubename
anotherName="chaiaurcode"

console.log(myYoutubename);
console.log(anotherName);



let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);

