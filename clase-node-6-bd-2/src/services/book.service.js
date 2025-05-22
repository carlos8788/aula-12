import Book from "../data/models/Book.js"
import Author from "../data/models/Author.js"

const all = async (title) => {
    if (title) {
        return await Book.find({ title: { $regex: title, $options: 'i' } }).populate('author', 'name')
    }
    return await Book.find().populate('author', 'name')
}

const getById = async (id) => {
    try {
        if (id) {
            return await Book.findById(id).populate('author', 'name')
        }
        return null
    } catch (error) {
        return null
    }

}

const create = async (book) => {

    return await Book.create(book)
}

const destroy = async (id) => {
    return await Book.findByIdAndDelete(id)
}

const update = async (id, book) => {
    return await Book.findByIdAndUpdate({ _id: id }, book, { new: true })
}

export default {
    all,
    getById,
    create,
    destroy,
    update
}