// Importing mongoose module
const mongoose = require('mongoose');

// Defining the schema for Todo
const TodoSchema = new mongoose.Schema({
    // 'text' field which is required and of type String
    text: {
        type: String,
        required: true,
    },
    // 'completed' field which is not required and of type Boolean
    completed: {
        type: Boolean,
        required: false,
    }
},
    {
        // Enabling timestamps to record createdAt and updatedAt dates
        timestamps: true,
    });

// Exporting the Todo model to use in other files
module.exports = mongoose.model('Todo', TodoSchema);