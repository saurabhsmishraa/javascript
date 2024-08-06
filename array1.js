//concat array javascript
const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];


// marvel_heros.push(dc_heros);
// console.log(marvel_heros)   // retrun array with in array

// now access 3rd index after merge
// console.log(marvel_heros[2])  // return spiderman




// conact is used for merge return new array without modify existing array
const new_heros = marvel_heros.concat(dc_heros);
// console.log(new_heros);


// use spred for merge in this we can merge number of array
const new_heros1 = [...marvel_heros, ...dc_heros];
// console.log(new_heros1)


// flat is used when we have array within array and i want it on single array
const array = [1, 2, [3, 4, [5, 6, [7, 8]]]]
// const flat_array = array.flat(3);  // you can use infinity also as a replacement of number
const flat_array = array.flat(Infinity);
// console.log(flat_array)

// use from => when data comes in other format like node,string,object

// console.log(Array.isArray("saurabh"));  //retrun false this is not array

// console.log(Array.from("saurabh"));

// console.log(Array.from({ name: "saurabh mishra" })) // retrun empty array

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)) // retrun new array from set of element
