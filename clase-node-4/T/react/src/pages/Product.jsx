import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const Product = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [product, setProduct] = useState({})

    // GET PRODUCT BY ID
    useEffect(() => {
        fetch(`http://localhost:3000/api/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data.payload)
            })
    }, [])

    const goHome = () => {
        navigate('/')
    }

    return (
        <>
            <div>Product {product.id}</div>
            <div>Product {product.nombre}</div>
            <button onClick={goHome} className="btn btn-primary">Volver</button>
        </>
    )
}
export default Product