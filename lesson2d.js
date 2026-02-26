//if ... else if ... else statement
// It is used to execute a block of code among many blocks of code based on a condition

let age = 100

if(age < 15){
    console.log("You are a too young to access this program")
}
else if (age >= 15 && age < 18){
    console.log("You are a teenager, you can access some parts of the program")
}
else if (age >= 18 && age < 60){
    console.log("You are an adult, you can access the entire program")
}
else{
    console.log("This episode is not suitable for you")
}