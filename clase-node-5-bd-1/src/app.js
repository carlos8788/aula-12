import express from "express"
import cors from "cors"
import config from "./config.js"
import connectToDB from "./database/connection.js"
import userRoutes from "./routes/users.routes.js"

const app = express()

connectToDB()

app.use('/users', userRoutes)

app.listen(config.PORT, ()=> {
    console.log(`Escuchando en el puerto ${config.PORT}`)
})