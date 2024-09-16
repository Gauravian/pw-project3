/*
1.Double using callback.
Write a function that takes in an array of integers and a callback function, and returns a new array where each
element is doubled using the callback.

*/

function doubleArray(arr, callback) {
    return arr.map(callback); // Use the callback to process each element
}

// Callback function to double the value
function doubleValue(num) {
    return num * 2;
}

// Example usage
let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = doubleArray(numbers, doubleValue);

console.log(doubledNumbers);
