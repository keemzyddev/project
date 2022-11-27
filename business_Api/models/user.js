const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        username: {type: String, required: true },
        email: {type: String, required: true},
        password: {type: String},
        // IsAdmin: {
        //     type: Boolean,
        //     default: false,
        // },
    },
    {timestamps: true}
)

module.exports = mongoose.model('user', userSchema) 