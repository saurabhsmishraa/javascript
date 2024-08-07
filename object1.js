// const tinderUser = new Object()




const tinderUser = {}
tinderUser.id = "121avw"
tinderUser.name = "armsto"
tinderUser.isLoggedIn = "false";

// console.log(tinderUser.id)

const regularUser = {
    email: "saurabhmishra@gmail.com",
    fullName: {
        userFullname: {
            firstname: "saurabh",
            lastname: "mishra"
        }
    }
}


// console.log(regularUser.fullName.userFullname)

const obj1 = { 1: 'a', 2: 'b', 3: 'c' }
const obj2 = { 4: 'd', 5: 'e', 6: 'f' }


// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = { ...obj1, ...obj2 }
console.log(obj3)