// Array methods demo
let fruits = ["apple", "banana", "cherry"];

console.log("Original:", fruits);

// pop() removes last item
fruits.pop();
console.log("After pop:", fruits);

// push() adds item at end
fruits.push("date");
console.log("After push:", fruits);

// splice(index, count) removes at specific position
fruits.splice(1, 1); // removes banana
console.log("After splice:", fruits);

// filter() removes by condition
fruits = fruits.filter(x => x !== "apple");//this will be needed for the stage project
console.log("After filter:", fruits);
