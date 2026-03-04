// Write a function that printsfrom number 1 to 50 but for multiples 3 print 'fizz' instead of the number, for multiples of five, ptint buzz and for numbers which are multiples of both 3 and 5 print 'fizzbuzz'
const numbers = (n) => {
    for (i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0){
            console.log("Fizzbuzz")
        }
        else if (i % 3 == 0){
            console.log("fizz")
        }
        else if (i % 5 == 0){
            console.log("buzz")
        }
        else{
            console.log(i)
        }
    }
}
numbers(50);