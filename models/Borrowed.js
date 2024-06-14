import mongoose from "mongoose";

const borrowedSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
        required: true
    },
    returned: {
        type: Boolean,
        default: false
    },
}, { timestamps: true });

const Borrowed = mongoose.model('Borrowed', borrowedSchema);

export default Borrowed;