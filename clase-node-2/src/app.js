import express from 'express';
import cors from 'cors';

// datos
const users = [
  {
    id: 1,
    name: "Lucía Fernández",
    email: "lucia.fernandez@example.com",
    role: "admin",
    createdAt: "2024-12-01T10:15:00Z"
  },
  {
    id: 2,
    name: "Mateo Rodríguez",
    email: "mateo.rodriguez@example.com",
    role: "editor",
    createdAt: "2025-01-10T14:20:00Z"
  },
  {
    id: 3,
    name: "Valentina Gómez",
    email: "valentina.gomez@example.com",
    role: "viewer",
    createdAt: "2025-02-05T09:45:00Z"
  },
  {
    id: 4,
    name: "Julián Martínez",
    email: "julian.martinez@example.com",
    role: "admin",
    createdAt: "2024-11-18T16:30:00Z"
  },
  {
    id: 5,
    name: "Sofía Herrera",
    email: "sofia.herrera@example.com",
    role: "editor",
    createdAt: "2025-03-22T12:00:00Z"
  },
  {
    id: 6,
    name: "Bruno Díaz",
    email: "bruno.diaz@example.com",
    role: "viewer",
    createdAt: "2025-01-30T18:10:00Z"
  },
  {
    id: 7,
    name: "Camila Pereira",
    email: "camila.lopez@example.com",
    role: "admin",
    createdAt: "2024-10-05T08:25:00Z"
  },
  {
    id: 8,
    name: "Tomás Ruiz",
    email: "tomas.ruiz@example.com",
    role: "editor",
    createdAt: "2025-02-15T11:35:00Z"
  },
  {
    id: 9,
    name: "Emma Castro",
    email: "emma.castro@example.com",
    role: "viewer",
    createdAt: "2025-03-01T15:50:00Z"
  },
  {
    id: 10,
    name: "Diego Morales",
    email: "diego.morales@example.com",
    role: "admin",
    createdAt: "2025-04-01T13:05:00Z"
  }
];

const app = express();

app.use(cors())
app.use(express.json())

// http://localhost:3000/
// Home
// REQUEST-> PETICIÓN DEL CLIENTE (NAVEGADOR)
// RESPONSE-> RESPUESTA DEL SERVIDOR
app.get('/', (request, response) => {

  response.json('Hola Express')
})

// http://localhost:3000/contacto
app.get('/contacto', (request, response) => {

  response.json('Mi contacto es: 123456')
})

// http://localhost:3000/users
app.get('/users', (request, response) => {

  response.json(users)
})

app.put('/user/edit', (request, response) => {
  // Buscar al usuario por algún atributo, para cambiar luego el nombre correspondiente
})

app.listen(3000, () => {
  console.log(`Mi servidor está corriendo en el puerto 3000`)
})
