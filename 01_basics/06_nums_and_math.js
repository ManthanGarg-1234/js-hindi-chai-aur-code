// study the difference between both ways

const score = 400;

console.log(score);

const balance = new Number(100);

console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(1));

const profit = new Number(45.13425622874);

console.log(profit.toFixed(4));

// study toPrecision() method in deep for better understanding
// range for this method is 1 to 21 and it returns a string
const otherNumber1 = 23.8966;
console.log(otherNumber1.toPrecision(3));

const otherNumber2 = 123.966;
console.log(otherNumber2.toPrecision(4));

const hundreds = 1000000;
console.log(hundreds.toLocaleString()); //1,000,000
console.log(hundreds.toLocaleString("en-IN")); //10,00,000

// study important one  (Number. and press enter by choosing from the list and see the outputs to understand)
// some are given below
Number.MAX_VALUE;
Number.MIN_VALUE;
Number.MAX_SAFE_INTEGER;
Number.MIN_SAFE_INTEGER;

// *************************** | MATHS | ********************

console.log(Math); // object
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));
console.log(Math.sqrt(25));
console.log(Math.sqrt(37));

console.log(Math.random()); // value lies always between 0 and 1
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
