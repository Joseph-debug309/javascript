// Javascript For loops
// Are used to iterate through a number of times
// Structure
// 1. For key word followed by parenthesis
// 2. Innitialization, set condition; incrememnt/decrememt
// 3. Body of the for loop

for(let i=0; i <= 10; i++){
    console.log("the new value is", i)
}

console.log("================================")

for(let i = 0; i <=10;i++)
    if (i == 6){
        console.log("This number is", i)
    }
    else{
        console.log("The new value of i is:", i)
    }


// Create a for loop that is able to print out all the leap years from 2000 to 2026

for(let year = 2000; year <= 2026; year++){
    if ((year % 4 === 0 && year % 100 !== 0)|| year % 400 === 0){
        console.log(year);
    }
}

