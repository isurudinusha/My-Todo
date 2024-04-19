// Importing necessary modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Importing routes for the Todo application
const routes = require('./routes/TodoRoutes');

// Loading environment variables from .env file
require('dotenv').config();

// Initializing express application
const app = express();

// Setting up the port for the server
const PORT = process.env.PORT || 5000;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());

// Middleware to enable CORS (Cross Origin Resource Sharing)
app.use(cors());

app.use(routes);

// Connecting to MongoDB using mongoose
mongoose.
    connect(process.env.MONGODB_URL)
    .then(() => {
        // Log to console when successfully connected to MongoDB
        console.log('Connected to MongoDB');
    });