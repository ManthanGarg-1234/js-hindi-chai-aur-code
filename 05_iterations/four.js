// for iterating over objects for in loop is used
const myObject = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

// printing keys

for (const key in myObject) {
  // console.log(`${key}`);
}

// printing values

for (const key in myObject) {
  // console.log(`${myObject[key]}`);
}

// printing key and values both

for (const key in myObject) {
  // console.log(`${key} shortcut is for ${myObject[key]}`);
}

// array ki keys are indices
const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
  // console.log(key," : ",programming[key]);
}

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");

// no output as map is not iterable through for in loop
for (const key in map) {
  console.log(key);
}
