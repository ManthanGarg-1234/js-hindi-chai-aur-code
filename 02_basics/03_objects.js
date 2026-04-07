// singleton
// Object.create

// object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "Hitesh",
  "full name": "Hitesh Choudhary",
  [mySym]: "mykey1", // symbol is declared like this in objects
  age: 18,
  location: "Jaipur",
  email: "hitesh@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
// console.log(JsUser.full name)  //can't access as in line 29 email does ? why --> understand
console.log(JsUser[mySym]); // accessing of symbol is in this way

JsUser.email = "hitesh@chatgpt.com";
console.log(JsUser.email);
console.log(JsUser);

Object.freeze(JsUser);
JsUser.email = "hitesh@microsoft.com";
console.log(JsUser.email); // does not change email as we previously freeze tha object means now change will occur
console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS user");
};

JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
