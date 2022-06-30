const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    valor: {
        type: Number,
        required: true,
    },
    urlImagem: {
        type: String,
        required: true,
    },
    sale: {
        type: Boolean,
        required: true,
    },
});

const userModel = mongoose.model("funkos", userSchema)
module.exports = userModel