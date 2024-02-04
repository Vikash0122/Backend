const mongoose = require("mongoose");

const connect = async() => {
    await mongoose.connect("mongodb://localhost/demo_DEV");
}

module.exports = connect;