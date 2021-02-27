const mongoose = require('mongoose');
const ContactModel = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String
    },
    phone: {
        type: String,
        required: true
    },
}, { timestamps: true });


module.exports = mongoose.model("Contact", ContactModel);