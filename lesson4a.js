// Functions with parameters
// These are values that get passed as arguments when we invoke a fuction. They help us to make fuctions that are reusable thoughout a program.


function greeting(name){
    console.log("Hello", name, "How have you been")
}

greeting("fauchia")
greeting("Joseph")
greeting("Esther")


console.log("===============================")

//Below is a funtion to calculate the sum of two numbers
function addition(num1, num2){
    sum = num1 + num2
    console.log("The sum of the numbers is:", sum)}

addition(57,34)

// Calculate area of a triangle whose length and width is 12 and 20 respectively
function trianglearea(base, height){
    area = (base * height)/2
    console.log("The area is", area,"cm²")
}

trianglearea(12,20)


console.log("===============================")
// Find the simple intrest given principle as 50000 rate as 5% and time as 8 yrs 
function simpleintrest(principle,rate,time){
    Intrest = (principle * rate * time) / 100
    console.log("the simple intrest is", Intrest)
}

simpleintrest(50000,5,8)
    