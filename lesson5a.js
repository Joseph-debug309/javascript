// Arrow functions
// these is a function that was introduced in the ECMA Script 6 and they give us the latest/modern way of defining functions in a compact manner
// At times the arrow functions can be said to be annonymous functions. This isbcoz they use the names of the variables they are contained in


const sayHello = () => {
    console.log("This is an arrow function")
}

sayHello();

console.log("=================================")
// Create an arrow function that is able to find the product of 3 no's
const product = () => {
    let num1 = 3
    let num2 = 4
    let num3 = 5
    ans = num1*num2*num3
    console.log("the product is", ans)
}

product();