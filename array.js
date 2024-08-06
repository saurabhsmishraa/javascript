const myArr = [1, 2, 3, 4, 5, 6];
// console.log(myArr);


// index
// console.log(myArr[0]);

// insert element => push = insert element in last

myArr.push(7);
// console.log(myArr)



// delete element => pop  = delete element from last
myArr.pop();
// console.log(myArr);

// unshift  = add element from start means from first position
myArr.unshift(8);
// console.log(myArr);

// shift  = remove element form start
myArr.shift();
// console.log(myArr);

// include = return true if value exist otherwise false
// console.log(myArr.includes(3));


// indexOf = return index position if value exist otherwise return -1
console.log(myArr.indexOf(1));


// join return array to string 

const newArr = myArr.join()
// console.log(myArr)
// console.log(newArr);

// slice => does not change the original array
// and select from a given start upto given end(length-1)

console.log("a", myArr);
const myNum1 = myArr.slice(1, 3)
console.log(myNum1);
console.log("b", myArr)  //original array not change

// splice => it overwrite thr original array
// and select from a given start upto given end

const myNum2 = myArr.splice(1, 3);
console.log(myNum2);
console.log("c", myArr)
