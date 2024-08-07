const course = {
    coursename: "js in today",
    price: "999",
    courseInstructor: "saurabh mishra"
}

const { courseInstructor, coursename, price } = course;
console.log(courseInstructor)
// or

const { courseInstructor: instructor } = course;
console.log(instructor)