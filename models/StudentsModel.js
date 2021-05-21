// Import mongoose
const mongoose = require('mongoose');

const StudentsSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        contactNumber: {
            type: String,
        },
        address: {
            type: String,
        },
        avatar: {
            type: String
        },
        dateCreated: {
            type: Date,
            default: Date.now
        }
    }
);

const StudentsModel = mongoose.model('Students', StudentsSchema);
module.exports = StudentsModel;