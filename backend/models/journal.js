const mongoose = require("mongoose");

const journalSchema = new mongoose.Schema({
    text: String,
    author: {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
      username: String,
    },
    created: {type: Date, default: Date.now},
    rating: Number
});

module.exports = mongoose.model('Journal', journalSchema);
