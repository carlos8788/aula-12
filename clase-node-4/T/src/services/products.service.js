import products from "../data/products.js"

const getAllProducts = () => {
    return products
}

const getProductById = (id) => {
    console.log(`Producto con id: ${id}`)
    const product = products.find(producto => Number(producto.id) === Number(id))

    return product
}

const createProduct = (product) => {
    const ultimoProducto = products[products.length - 1]
    const newId = Number(ultimoProducto.id) + 1
    const newProduct = Object.assign(product, {id: newId})
    products.push(newProduct)

    return newProduct
}

const updateProduct = (id, newData) => {
    console.log(`Producto con id: ${id}`)
    console.log(`Cuerpo del producto con id: ${id}, {${newData}}`)
    const product = products.find(producto => Number(producto.id) === Number(id))
    const newProduct = Object.assign(product, newData)

    return newProduct
}

const deleteProduct = (id) => {
    const index = products.findIndex(producto => Number(producto.id) === Number(id))
    console.log(index)
    products.splice(index, 1)
    return products
}

export default {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}