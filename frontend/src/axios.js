// Importing axios library for making HTTP requests
import axios from 'axios';

// Creating an instance of axios with custom configuration
const instance = axios.create({
    // Setting the base URL for the HTTP requests
    baseURL: 'http://localhost:5000' // For local development
    // When deploying, use the following URL
    // baseURL: 'https://my-todo-yc2c.onrender.com'
});

// Exporting the instance to be used in other parts of the application
export default instance;