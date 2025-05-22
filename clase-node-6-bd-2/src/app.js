import express from "express"
import cors from "cors"
import config from "./config.js"
import connectToDB from "./data/connect.js"
import bookRouter from "./routes/book.route.js"

const app = express()

app.use(cors())
app.use(express.json())

connectToDB()

app.use('/books', bookRouter)

app.listen(config.PORT, ()=> {
    console.log(`Listen to port: ${config.PORT}`)
})