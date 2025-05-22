// book model
import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    pages: {
        type:
            Number,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    } // Referencia al modelo de Author
});

const Book = mongoose.model('Book', bookSchema);

export default Book