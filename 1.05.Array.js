// JavaScript:- Arrays
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars)

// Using the JavaScript Keyword new
const trucks = new Array("Volvo", "Benz", "Ford")
console.log(trucks)

// Arrays are Objects
const person = ["John", "Doe", 46];
console.log(person)

// Array Properties and Methods 
console.log("Cars Length:", cars.length)
console.log("Sorting:", cars.sort())


// Adding Array Elements
const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Cherry")

fruits[fruits.length] = "Blueberry"
console.log(fruits)

// The pop() method removes the last element from an array
cars.pop()
console.log(cars)

// The shift() method removes the first array
trucks.shift()
console.log(trucks)

// The concat() method creates a new array by merging (concatenating) existing arrays
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys) 
console.log(myChildren)

// The slice() method slices out a piece of an array into a new array
const foods = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = foods.slice(2,4)
console.log("Citrus:", citrus)



// JavaScript :- Array Search
// The indexOf() method searches an array for an element value and returns its position
console.log("Index number:", foods.indexOf("Apple"))

// Array.includes() to arrays. This allows us to check if an element is present in an array
console.log(foods.includes("Mango"))




// JavaScript:- Sorting Arrays
// The sort() method sorts an array alphabetically
console.log( foods.sort() )

// The reverse() method reverses the elements in an array
console.log( foods.reverse())

