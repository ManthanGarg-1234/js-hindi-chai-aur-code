// Basic Syntax

// if(true){ }

// else{ }

// if can be written without else but we can't write only else alone

// const temperature = 41;

// if (temperature === 40) {
//   console.log("less than 50");
// } else {
//   console.log("temperature is greater than 50");
// }

// if (2 === "2") {
//   console.log("executed");
// } else {
//   console.log("not executed");
// }

// if (2 === 2) {
//   console.log("executed");
// } else {
//   console.log("not executed");
// }

// // console.log("Execute");
// // <, >, <=, >=, ==, !=, ===, !==

// const score = 200;

// if (score > 100) {
//   let power = "fly";
//   console.log(`User power: ${power}`); //here works
// }

// // console.log(`User power: ${power}`); //gives error because of scope

// const balance = 1000;

// if (balance > 500) (console.log("test"), console.log("test2")); // not recommended to write like this is multiple lines to executed then must use {line1,line2...}

// if (balance < 500) {
//   console.log("less than 500");
// } else if (balance < 750) {
//   console.log("less than 750");
// } else if (balance < 900) {
//   console.log("less than 900");
// } else {
//   console.log("less than 1200");
// }

// real world example -> any website app login and all details filled then only proceed further
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}