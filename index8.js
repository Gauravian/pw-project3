/*
8.Get Data from API and Display it on the browser console.
Write a JavaScript program that uses the Fetch method to retrieve data from an API, and then logs the data to
the console. For example, you could use the API at https://jsonplaceholder.typicode.com/posts to retrieve a list
of posts, and then display them to the browser console.

*/

async function fetchAndDisplayPosts() {
    try {
        // Fetch data from the API
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');

        // Check if the response is ok (status code 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        // Parse the response JSON
        let data = await response.json();

        // Log the data to the console
        console.log('Posts retrieved from the API:', data);
    } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error('There was a problem with the fetch operation:', error);
    }
}

// Call the function to fetch and display posts
fetchAndDisplayPosts();
