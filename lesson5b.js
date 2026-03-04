// Arrow functions with parameters
// parameters are values that are passed as arguments when called

const greet = (name) =>{
    console.log("Hello "+ name +" how have you been.")
}

greet("James");
greet("Joseph");


// Example 2
console.log("=================================")
// Below is a function to find the area of a circle
const areaOfCircle = (radius) => {
    let pi = 3.142
    let area = pi * radius * radius
    console.log("The area of the circle is", area , "cm\u00B2")
}

areaOfCircle(7)
areaOfCircle(28)

console.log("=================================")
// Come up with your own function that utilizes three parameters
const volumeofacubeoid = (length, width, height) => {
    let volume = length * width * height
    console.log("The volume of the cubeoid is", volume, "cm\u00B3")
}

volumeofacubeoid(23,45,9)
volumeofacubeoid(12,34,56)
