/*
4.Arrange in alphabetical order.
Write a program that accepts a list of objects representing books [ title, author, and year] and a callback
function. The program should use the map function to create a new list containing only the titles of the books,
and then pass this new list to the callback function. The callback function should then log the titles to the
console in alphabetical order.
*/

function getBookTitles(books, callback) {
    // Use map to create a new list of book titles
    let titles = books.map(book => book.title);

    // Pass the list of titles to the callback function
    callback(titles);
}

// Callback function to sort and log titles in alphabetical order
function logTitlesAlphabetically(titles) {
    let sortedTitles = titles.sort();
    console.log("Titles in alphabetical order:");
    console.log(sortedTitles);
}

// Example usage
let books = [
    { title: "The Hunger Games", author: "Suzanne Collins", year: 2008 },
    { title: "The Fault in Our Stars", author: "John Green", year: 2012 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 }
];

getBookTitles(books, logTitlesAlphabetically);
