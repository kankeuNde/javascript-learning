/*//afficher un message
console.log("Hello world!");

// variables
const name = "Ange";
let age = 23;
age = 32;

console.log("Name: " + name);
console.log("Age: " + age);

// 3. arithmetic operators
console.log(10 + 3);
console.log(10 - 3);
console.log(10 * 3);
console.log(10 / 3);
console.log(10 % 3);
console.log(10 ** 2);
//My name is Ange and I'm 23 years old.
console.log("My name is " + name + " and I'm " + age + " years old.");
console.log(`My name is ${name} and I\'m ${age} years old.`);

console.log("5" + 3);
console.log(Number("5")+3);
*/
const name = "Pavel";
let city = "Douala";
let favorite_prog_lang = "JavaScript";

console.log("Name: " + name);
console.log("City: " + city);
console.log("Favorite programming language: " + favorite_prog_lang);
console.log(`My name is ${name}, I live in ${city} and my favorite programming language is ${favorite_prog_lang}.`);

/*let a = 17;
let b = 5;
let add = a + b;
let sub = a - b;
let mult = a * b;
let div = a/b;
let mod = a%b;
let exp = a**b;
console.log(`${a} + ${b} = ${a + b}`);
console.log(`${a} - ${b} = ${a - b}`);
console.log(`${a} * ${b} = ${mult}`);
console.log(`${a} / ${b} = ${div}`);
console.log(`${a} % ${b} = ${mod}`);
console.log(`${a} ** ${b} = ${exp}`);

let width = 8;
let height = 3.5;
console.log(`${width} * ${height} = ${width*height}`);
console.log(`Given a rectangle with a width = ${width} and a height = ${height}, the perimeter is ${2 * (width + height)}`);

let radius = 4;
console.log(`Given a area of a circle egual to ${(radius**2 * Math.PI).toFixed(2)}`); 

let celsius = 23;
let fahrenheit = celsius * (9/5) + 32;

console.log(`${celsius} Celsius degree converted in Fahrenheit is ${fahrenheit} Fahr`);
*/
// 1min = 60s
// 1H = 60*60 = 3600s
// hours = totalSeconds // 3600
// remaining = totalSeconds % 3600;
// min = remaining // 60;
// remain_min = remaining % 60;

let totalSeconds = 7385;
// 
let hours = Math.floor(totalSeconds/3600);

let rem_h = (totalSeconds % 3600);
let min = Math.floor(rem_h/60);
let s = rem_h % 60;

console.log(`${hours}H ${min}min ${s}s`);


