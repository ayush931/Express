const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        maxlength: [20, 'Name must be length than 20 char']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    }
})

module.exports = mongoose.model("User", userSchema)