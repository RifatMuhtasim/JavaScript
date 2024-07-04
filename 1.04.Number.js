// JavaScript:- Numbers
let x = 123e5;   
let y = 123e-5;
console.log(`X : ${x} and Y: ${y}`)


// JavaScript:- BigInt
y = BigInt(1234567890123456789012345)
console.log("Big Number:", y)


// JavaScript:- Number Methods
/*
Method	Description
toString()	Returns a number as a string
toExponential()	Returns a number written in exponential notation
toFixed()	Returns a number written with a number of decimals
toPrecision()	Returns a number written with a specified length
ValueOf()	Returns a number as a number
*/

console.log("To String:", x.toString())
console.log("To Exponential:", x.toExponential())

let xx = 3.1416
console.log("Fixed: ", xx.toFixed(2))

// The Number() method can be used to convert JavaScript variables to numbers
console.log( Number(true) )

// parseInt() parses a string and returns a whole number
console.log( parseInt("-10") )