const mongoose = require('mongoose');

const musicSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    autor: {
        type: String,
        require: true,
    },
    linkImage: {
        type: String,
        require: true,
    },
    linkMusic: {
        type: String,
        require: true,
    },
});

module. exports = mongoose.model("Musicas", musicSchema);