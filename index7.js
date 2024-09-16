/*
7.Multiple requests.
Create an asynchronous function that retrieves data from two different API endpoints: "https://
jsonplaceholder.typicode.com/todos/1" and "https://jsonplaceholder.typicode.com/posts/1". The first API returns
a to-do task, while the second API provides post details. The function should combine the results from both APIs
and log them as an object, where the keys are "todo" and "post", and the corresponding values are the

*/

async function fetchCombinedData() {
    try {
        // Fetch data from both APIs concurrently
        let [todoResponse, postResponse] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/todos/1'),
            fetch('https://jsonplaceholder.typicode.com/posts/1')
        ]);

        // Check if both responses are ok
        if (!todoResponse.ok) {
            throw new Error('Network response for todo was not ok ' + todoResponse.statusText);
        }
        if (!postResponse.ok) {
            throw new Error('Network response for post was not ok ' + postResponse.statusText);
        }

        // Parse both responses as JSON
        let todoData = await todoResponse.json();
        let postData = await postResponse.json();

        // Combine the results into a single object
        let combinedData = {
            todo: todoData,
            post: postData
        };

        // Log the combined results
        console.log(combinedData);
    } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error('There was a problem with the fetch operation:', error);
    }
}

// Example usage
fetchCombinedData();
