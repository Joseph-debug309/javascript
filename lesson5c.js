// Exporting modules
// We export modules so that we can/ utilize them in other files/modules in our programs


export const calculator = (x, y) => {
    let diffrence = x - y

    console.log("The diffrence is", diffrence)
};

export const simpleIntrest = (p, r, t) => {
    let intrest = (p * r * t) / 100
    console.log("The simple intrest is", intrest)
};

const bmi = (weight, height) => {
    let bmi = weight / (height * height)
    console.log("The BMI is", bmi)
};

export { bmi }