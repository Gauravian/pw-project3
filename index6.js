/*
6.Fetch results asynchronously.
Write a function that asynchronously fetches data from an API
[ https://jsonplaceholder.typicode.com/todos/1 ]and logs the result to the console.
*/

async function fetchData() {
    try {
        // Fetch data from the API
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

        // Check if the response is ok (status code 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        // Parse the response JSON
        let data = await response.json();

        // Log the result to the console
        console.log(data);
    } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error('There was a problem with the fetch operation:', error);
    }
}

// Example usage
fetchData();
