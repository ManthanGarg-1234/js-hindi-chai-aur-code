const coding = ["js", "ruby", "java", "python", "cpp"];

// forEach loop
coding.forEach(function (val) {
  // this function is callback function hence it has no name and in parentheses we pass what we like to call each array element -> that name we pass here (here)
  //     console.log(val);
});

// arrow function and loop together
coding.forEach((item) => {
  // console.log(item);
});

function printMe(item) {
  //     console.log(item);
}

// coding.forEach(printMe)

// forEach loop has these parameters also
coding.forEach((item, index, arr) => {
  //   console.log(item, index, arr);
});

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName, ": ", item.languageFileName);
});
