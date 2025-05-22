import express from "express"
import cors from "cors"
import productsRoute from "./routes/products.route.js"
const app = express()
const PORT = 3000

app.use(express.json())
app.use(cors())

app.use('/api/products', productsRoute)

app.listen(PORT, () => {
    console.log(`Escuchando en el puerto: ${PORT}`)
}
)