function sayMyName() {  // sayMyName() parameter
    // console.log("s")
    // console.log("a")
    // console.log("u")
    // console.log("r")
    // console.log("a")
    // console.log("b")
    // console.log("h")
}
sayMyName(); // sayMyName() function call/execution
// sayMyName  function reference



function addTwoNumbers(number1, number2) {
    console.log(number1 + number2)
}
// addTwoNumbers(3, 4)
// addTwoNumbers(3, "4")
// addTwoNumbers(3, null)


function TwoSum(number1, number2) {
    // console.log(number1 + number2)
}
// const result = TwoSum(3, 4)
// console.log("result:", result)


function sum(number1, number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2
}
const result = sum(1, 6)
// console.log("result:", result)




function loginUserMessage(username) {
    if (!username) {
        console.log('please enter username')
        return  //after this outer scope return is not work
    }
    return `${username} just loggd in`
}
// console.log(loginUserMessage("saurabh mishra"))
console.log(loginUserMessage())  // retrun undefined because arguement is blank
