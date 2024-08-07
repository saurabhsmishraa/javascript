// two ways to create object
// 1.Object.create => constructor

// 2.  Object literal
const jsUser = {
    name: 'saurabh',
    age: 30,
    occupation: 'Software Engineer',
    email: "saurabh@gmail.com",
    // suppose we have 
    "full name": "saurabh mishra"  // you can not access it by . operator
};

// access element  1. use .   2. [""]

// console.log(jsUser.age);
// console.log(jsUser["email"]);

// console.log(jsUser["full name"])


// override value;
// jsUser.email = "saurabhpbh1999@gmail.com"
// console.log(jsUser.email)

// if you want to lock your object then use freeze
Object.freeze(jsUser)
jsUser.email = "saurabhmishra@gmail.com"
console.log(jsUser)


