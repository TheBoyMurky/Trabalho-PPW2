const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    senha: {
        type: String,
        required: true,
    },
});

const userModel = mongoose.model("users", userSchema)
module.exports = userModel