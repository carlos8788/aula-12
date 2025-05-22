import bookService from "../services/book.service.js"

const all = async (req, res) => {
    const title = req.query.title
    const result = await bookService.all(title)

    res.json({
        status: 200,
        length: result.length,
        message: 'Books',
        payload: result
    })
}

const getById = async (req, res) => {
    const { id } = req.params
    const book = await bookService.getById(id)

    if (book) {
        return res.json({
            status: 200,
            message: 'Books',
            payload: book
        })
    }

    res.json({ status: 400, message: 'No se encontró un libro' })
}

const create = async (req, res) => {
    const book = req.body

    const newBook = await bookService.create(book)

    return res.json({
        status: 200,
        message: 'Books',
        payload: newBook
    })
}

const destroy = async (req, res) => {
    const { id } = req.params

    const result = await bookService.destroy(id)

    return res.json({
        status: 204,
        message: 'Books',
        payload: result
    })
}

const update = async (req, res) => {
    const { id } = req.params
    const book = req.body

    const result = await bookService.update(id, book)

    return res.json({
        status: 200,
        message: 'Books',
        payload: result
    })
}

export default {
    all,
    getById,
    create,
    destroy,
    update
}