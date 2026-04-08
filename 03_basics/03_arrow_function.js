// ================== OBJECT + THIS ==================

const user = {
  username: "hitesh",
  price: 999,

  // METHOD (object ke andar function)
  welcomeMessage: function () {
    // "this" refers to current object (user)
    console.log(`${this.username} , welcome to website`);

    // console.log(this);
    // -> pura user object print karega
  },
};

user.welcomeMessage();

// user.username = "sam"
// user.welcomeMessage()
// -> ab output change ho jayega (dynamic this)

// ================== GLOBAL THIS ==================

// Node.js environment me:
console.log(this);
// -> {} (empty object)

// Browser me:
console.log(this);
// -> window object (global object)

// 👉 Difference samajh:
// Browser = window global
// Node = global object different hota hai

// ================== NORMAL FUNCTION ==================

function chai() {
  let username = "hitesh";

  console.log(this);
  /*
        Node.js:
        -> global object (NOT empty {})
        
        Browser:
        -> window object
    */

  console.log(this.username);
  /*
        undefined — WHY?

        because:
        - "this" yaha object ko refer nahi kar raha
        - username local variable hai (this.username nahi hai)
    */
}

chai();

// ================== FUNCTION EXPRESSION ==================

// same behavior as above (no difference in this)

const chai2 = function () {
  let username = "hitesh";
  console.log(this); // global object
  console.log(this.username); // undefined
};

chai2();

// ================== ARROW FUNCTION ==================

const chai3 = () => {
  let username = "hitesh";

  console.log(this);
  /*
        IMPORTANT:
        Arrow function apna "this" create nahi karta
        -> parent scope ka "this" use karta hai

        Yaha parent = global scope
        Node me -> {}
    */

  console.log(this.username); // undefined
};

chai3();

// ================== ARROW FUNCTION RETURN ==================

const addTwo = (num1, num2) => {
  return num1 + num2;
};

// SHORT VERSION (implicit return)
const addTwoShort = (num1, num2) => num1 + num2;

// parentheses use kar sakte ho
const addTwoAlt = (num1, num2) => num1 + num2;

// OBJECT return karna ho to parentheses compulsory
const returnObj = () => ({ username: "hitesh" });

console.log(addTwo(3, 4)); // 7
console.log(addTwoShort(3, 4)); // 7
console.log(returnObj()); // { username: "hitesh" }

// ================== ARRAY + forEach ==================

const myArray = [2, 5, 3, 7, 8];

myArray.forEach(function (item) {
  console.log(item);
});

/*
forEach kya karta hai:
- har element pe function run karta hai

Output:
2
5
3
7
8
*/

// Arrow version
myArray.forEach((item) => {
  console.log(item);
});

// ================== CORE TAKEAWAYS ==================

/*
1. "this" depends on HOW function is called, not where written

2. Object method:
   -> this = object

3. Normal function:
   -> this = global object

4. Arrow function:
   -> this = inherited from parent (no own this)

5. this.username undefined hota hai:
   -> kyunki username local variable hai, object property nahi

6. StringBuilder type thinking JS me mat la:
   -> JS me context samajhna zyada important hai syntax se
*/
