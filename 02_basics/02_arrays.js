const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

marvel_heros.push(dc_heros)

console.log(marvel_heros)  // array ke andar array aa jayega

// dc_heroes becomes an element of marvel_heores
console.log(marvel_heros[3])

// accesing dc_heroes from marvel_heroes
console.log(marvel_heros[3][1])

// this is solved by usinf concat (which return new array not chnage the existing array)
const allHeros = marvel_heros.concat(dc_heros);

console.log(allHeros);

// spread operator (does same work as concat does)

const all_new_heros = [...marvel_heros, ...dc_heros]

console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({ name: "hitesh" })); // interesting -> study about this

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
