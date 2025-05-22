import express from "express";
import cors from "cors";
import usersRoutes from "./routes/usersRoutes.js"

// app.js ES EL ENTRY POINT
const app = express();

// MIDDLEWARES
app.use(express.json())
app.use(cors())

//RUTAS
app.use('/users', usersRoutes)

// const funcionConArgsOpcionales = (nombre, apellido='Invitado') => {
//     console.log(`Mi nombre es: ${nombre} - ${apellido}`)
// }
// funcionConArgsOpcionales('Luis', 'Pérez')
const PORT = 3000
app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT}`)
})
