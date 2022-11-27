const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
    {
        title: {
            type = String,
            required: true,
            unique: true
        },
        desc: {
            type = String,
            required: true
        },
        img: {
            type = String,
            default: false  
        },
        categories: {
            type: Array
        },
        size: {
            type String
        },
        color: {
            type: String
        },
        price: {
            type: String
        },
        
    },
    {timestamps: true}
)

module.exports = mongoose.model('product', productSchema)