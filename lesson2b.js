// Comparison operators
// Ussually evaluates to a boolean
let num1 = 5
let num2 = 10
let num3 = 20

console.log(num1 == num2)
console.log(num1 >= num2)
console.log(num1 <= num2)
console.log(num1 != num2)
console.log(num1 > num2)
console.log(num1 < num2)

// the triple equal sign is used to check for both value and data type
console.log(num1 === num2) //false
console.log(num1 === 5) //true

// Logical operators
//logical operators are used to combine two or more conditions and return a boolean value
// Logical and(&&), evaluates true when all conditions are true
console.log((num1 < num2) && (num2 > num1) && (num3 > num2))

// Logical or(||) evaluates true whe one of the conditions is true
console.log((num1 > num2) || (num2 > num1))

// Logical not(!) is used to reverse the logical state of an operand/used to negate a condition
console.log(!(num1 < num2)) //false