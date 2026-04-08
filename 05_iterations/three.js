// ["", "", ""]  // strings if inside array
// [{}, {}, {}]  // objects if inside array

const arr = [1, 2, 3, 4, 5];

// for of loop on array
for (const num of arr) {
  //here arr acts as an object jiske uper loop lgana hai
  //console.log(num);
}

// for of loop on strings
const greetings = "Hello world!";
for (const greet of greetings) {
  //console.log(`Each char is ${greet}`)
}

// Maps (key:value pairs)  key is unique , values can be duplicate

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India"); // not included as it is duplicate key-value pair

// console.log(map);

// printing keys
for (const [key] of map) {
  //   console.log(key);
}

// printing values
for (const value of map) {
  //   console.log(value);  //also gives keys when printing only values
}

// printing key and values both
for (const [key, value] of map) {
  // console.log(key, ':-', value);
}

const myObject = {
  game1: "NFS",
  game2: "Spiderman",
};

// for of loop does not allow iteration over objects
// below all gives error

// for (const key of myObject) {
//     console.log(key);
// }

// for (const [value] of myObject) {
//     console.log(key, ':-', value);
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }
