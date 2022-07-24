const mongoose = require('mongoose');

const Note = mongoose.model('Note',{
    title:String,
    text:String
});

module.exports = Note