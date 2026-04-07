// simple declaration and we can access them easily

// Global Scope

// let a = 100;
// const b = 200;

var c = 300;

// below scope of a,b,c is ends with line 12
if (true) {
  let a = 10;
  const b = 20;
  //   this is special case
  var c = 30; // even if you simply write c = 30 then also problem as 30 will get printed then also
  // console.log("INNER: ", a);
}

// lines 15 and 16 gives error
// console.log(a);
// console.log(b);

// gives 30 as output instead c is inside a block of code (block scope)
// and above we declare c as 300
// that is why we don't use var keyword
console.log(c);

// function inside function

function one() {
  const username = "hitesh";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website);  //gives error because scope is inside two() not outside
    two();
}

one();

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website); // error as scope is not outside (upto line 49)
    console.log(username)  //here accessible as scope is till line 52
}

console.log(username);  //error as scope is not outside (till line 52)

// ++++++++++++++++++ interesting ++++++++++++++++++

// study about these both are function declaration different ways

console.log(addone(5)); //possible

function addone(num) {
  return num + 1;
}
console.log(addone(5)); // yeh toh pta hi hai possible hai

// below is also called expression

addTwo(5); // error as we are trying to access addTwo before it was created

const addTwo = function (num) {
  return num + 2;
};
console.log(addTwo(5)); //idhar toh possible hai hi
