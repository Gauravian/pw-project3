/*
2. String Manipulation.
Write a function “manipulateString” that takes in a string and converts the characters to uppercase letters. The
function should return a callback function “logString” that logs the sentence “The manipulated string is: “ along
with the manipulated string or the new string to the console.
*/

function manipulateString(str) {
    // Convert the string to uppercase
    let manipulatedStr = str.toUpperCase();

    // Return the callback function
    return function logString() {
        console.log(`The manipulated string is: ${manipulatedStr}`);
    };
}

// Example usage
let myString = "hello, world!";
let logFunction = manipulateString(myString);
logFunction(); // Logs the manipulated string
