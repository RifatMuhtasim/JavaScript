// JavaScript Data Types
// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");


let a =  "Apple" + 16 + 4
console.log(a)


// JavaScript:- Functions
function My_function(v1, v2){
    return v1 + v2;
}
console.log( My_function(10, 20) )



// JavaScript:- Objects
const car = {type:"Fiat", model:"500", color:"white"};



// JavaScript:- Events Running on HTML file
function JS_Events(){
    alert("JavaScript Events is Running.")
}
/*
    <button onclick="JS_Events()" >Alert</button>
*/



// JavaScript: String
let text = "We are the    so-called \"Vikings\" from the north.";
console.log(text)

let text2 =    `
The quick 
brown fox 
jumps over 
the lazy dog.
`
console.log(text2, text2.length)

console.log(text[0])


// slice() extracts a part of a string and returns the extracted part in a new string
console.log( text.slice(0, 6) )

// A string is converted to upper case with toUpperCase()
console.log(text.toUpperCase())

// concat() joins two or more strings
text_concat = text.concat(" ", text2)
console.log(text_concat)

// The trim() method removes whitespace from both sides of a string
console.log(text.trim())

// The repeat() method returns a string with a number of copies of a string
const value = "Hello World"
console.log(value.repeat(2))

// The replace() method replaces a specified value with another value in a string
result = value.replace("World", "Earth")
console.log(result)

// replaceAll() method allows you to specify a regular expression instead of a string to be replaced.

// A string can be converted to an array with the split() method
const alphabet = "a, b, c, d, e, f, g, h, i, j"
split_alphabet = alphabet.split(",") 
console.log(split_alphabet)


// JavaScript:- String Search
let texter = "Please locate where 'locate' occurs!";
console.log( "IndexOf:", texter.indexOf("locate") )
console.log( "LastIndexOf:", texter.lastIndexOf("locate"))

// String search()
console.log( "Search:", texter.search("occurs!") )

// String match()
console.log( "Match:", texter.match("ere"))

// String matchAll()
console.log("Match all:", texter.matchAll("locate"))

// String includes()
console.log("Includes:", texter.includes("wheres"))


// JavaScript:- Template Strings
let FirstName = "Rifat"
let LastName = "Muhtasim"
let FullName = `Welcome ${FirstName}, ${LastName}`
console.log(FullName)