import { useEffect, useState } from 'react'
import ListProducts from '../components/ListProducts'
import Form from '../components/Form'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const [products, setProducts] = useState([])
    const navigate = useNavigate()

    //Get All Products
    useEffect(() => {
        fetch('http://localhost:3000/api/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data.payload)
            })
    }, [])

    // POST PRODUCT
    const handleSubmitProduct = (event) => {
        event.preventDefault()
        const data = Object.fromEntries(new FormData(event.target))

        fetch('http://localhost:3000/api/products', {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                const newListProducts = [...products, data.payload]
                setProducts(newListProducts)
            })
    }

    const viewProduct = (id) => {
        navigate(`/product/${id}`)
    }

    return (
        <>
            <Form handleSubmitProduct={handleSubmitProduct} />
            <ListProducts products={products} view={viewProduct}/>
        </>
    )
}
export default Home