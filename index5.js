/*
5.Greeting Promise.
You need to write a function that takes a name as input and returns a promise that resolves with a greeting
message. The function should greet the person using their name, with a message in the format "Hello, {name}!".
For example, if the input to the function is "Mithun", the promise should resolve with the string "Hello, Mithun!".
*/

function greet(name) {
    return new Promise((resolve, reject) => {
        // Ensure the name is a string and not empty
        if (typeof name === 'string' && name.trim() !== '') {
            // Construct the greeting message
            let greetingMessage = `Hello, ${name}!`;
            resolve(greetingMessage);
        } else {
            // Reject the promise if the name is invalid
            reject('Invalid name provided');
        }
    });
}

// Example usage
greet("Mithun")
    .then(message => console.log(message)) // Logs: Hello, Mithun!
    .catch(error => console.error(error)); // Handles any errors

