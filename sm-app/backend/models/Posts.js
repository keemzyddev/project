import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title:{ type: String},
    message:{ type: String},
    name: { type: String },
    creator:{ type: String},
    tags:[ String ],
    selectedFile: [{ type: String }],
    likes: {
        type: [String],
        default: []
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
})

const Posts = mongoose.model('Posts', postSchema)

export default Posts