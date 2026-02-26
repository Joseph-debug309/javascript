// Object data type
// An object datatype in js is a data type stores data in form of key value pairs

let person ={
    Name : "Linet Wangui",
    Age : 23,
    isRegistered : true
};

console.log("The details of the person is", person)

// First method is by use of square brackets
console.log(person["Age"])

// By use of the dot notation
console.log(person.Name)

// Check the datatype
console.log(typeof(person))

// What is the diffrence btwn a dictionary in python, object in javascript and a json when dealing with API's

// Array data type
// refers to a collection od  items that are on indeces
let fruits = ["Mango", "Pineapple", "Apple", "Banana", "Melon", "Lemon", "Grapes" ]

console.log("the entire array of fruits is:", fruits)
console.log(fruits[3])

// You can slice items of an array
console.log(fruits.slice(2, 5))