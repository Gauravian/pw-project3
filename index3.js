/*
3.Age in Days.
Write a JavaScript function called ageInDays that accepts an object containing a person's first name, last
name, and age in years as input. The function should concatenate the first and last name into a single string
and store it in a variable called fullName. It should then calculate the person's age in days and store it in a
variable called ageInDays.
The ageInDays function should then return a callback function that logs a message to the console. The
message should include the person's full name and age in days, and should be in the format: "The person's full
name is [full name] and their age in days is [age in days]."
Note that the ageInDays function should not log the message to the console directly, but should instead return
a callback function that can be used to log the message at a later time.

*/
function ageInDays(person) {
    // Concatenate the first and last name to form fullName
    let fullName = `${person.firstName} ${person.lastName}`;

    // Calculate the age in days (approximating 365 days per year)
    let ageInDays = person.age * 365;

    // Return a callback function that logs the message
    return function logMessage() {
        console.log(`The person's full name is ${fullName} and their age in days is ${ageInDays}.`);
    };
}

// Example usage
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

let logPersonAgeInDays = ageInDays(person);
logPersonAgeInDays(); // Logs the message to the console
