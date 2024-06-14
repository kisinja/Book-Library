import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255
    },
    author: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255
    },
    genre: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255
    },
    price: {
        type: Number,
        required: true,
    },
    available: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

const Book = mongoose.model('Book', bookSchema);

export default Book;