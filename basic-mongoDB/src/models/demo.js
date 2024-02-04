const mongoose = require("mongoose");

const demoSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true,
    },
    userEmail: {
        type: String,
    }
}, {timestamps: true});

const Demo = mongoose.model('Demo', demoSchema);
module.exports = Demo;