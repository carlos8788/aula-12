import productsService from "../services/products.service.js";

const getAllProducts = (req, res) => {
    const products = productsService.getAllProducts()
    res.json({ 
        status: 200, 
        message: 'Productos', 
        payload: products 
    })
}

const getProductById = (req, res) => {
    const { id } = req.params

    const product = productsService.getProductById(id)

    res.json({ 
        status: 200, 
        message: 'Producto', 
        payload: product 
    })
}

const createProduct = (req, res) => {
    const body = req.body

    const product = productsService.createProduct(body)

    res.json({ 
        status: 201, 
        message: 'Productos', 
        payload: product 
    })
}

const updateProduct = (req, res) => {
    const { id } = req.params
    const body = req.body

    const product = productsService.updateProduct(id, body)

    res.json({ 
        status: 200, 
        message: 'Productos', 
        payload: product 
    })
}

const deleteProduct = (req, res) => {
    const { id } = req.params

    const product = productsService.deleteProduct(id)
    res.json({ 
        status: 202, 
        message: 'Productos', 
        payload: product 
    })
}

export default {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}