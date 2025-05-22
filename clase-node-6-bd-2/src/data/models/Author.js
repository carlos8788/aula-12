import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    // No necesitamos referenciar los libros aquí
});
const Author = mongoose.model('Author', authorSchema);

export default Author