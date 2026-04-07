function sayMyName() {
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("E");
  console.log("S");
  console.log("H");
}

sayMyName(); //calling function

// function addTwoNumbers(number1, number2) {
//   //here number1,number2 are parameters

//   console.log(number1 + number2);
// }

addTwoNumbers(); // output NaN

//here number1 -> 3 ,number2 -> 5 are arguments
addTwoNumbers(3, 5); // output 8
addTwoNumbers(3, "4"); // output 34
addTwoNumbers(3, null); // output 3

// also we can store function result in another variable
// const result = addTwoNumbers(3, 5)

// console.log("Result: ", result); //result ki value is undefined

// SO FOR ABOVE ISSUE WRITE LIKE THIS

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    // OR BELOW WAY IS ALSO
    return number1 + number2
} 

const val = addTwoNumbers(3,4)
console.log("Result: ", val)



function loginUserMessage(username){  // pass parameter as username == "sam" and see output
    if(username===undefined){ // username === undefined
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage())
console.log(loginUserMessage("hitesh"))

// when we don't know how many parameters we have 

// spread operator OR rest operator
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))


const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`); // price comes undefined because we use prices here
}

// takes user object as argument
handleObject(user)

// OR 

// takes another object as argument
handleObject({
    username: "sam",
    prices: 399
})


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
// OR second way
console.log(returnSecondValue([200, 400, 500, 1000]));