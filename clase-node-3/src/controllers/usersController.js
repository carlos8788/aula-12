import { request, response } from "express"
import usersService from "../services/usersService.js"

const getAllUsers = (request, response) => {
    const usuarios = usersService.getAllUsers()

    response.json({
        message: 'Pepe',
        length: usuarios.length,
        payload: usuarios
    })
}

const getUsersPairId = (request, response) => {
    const usersPairId = usersService.getUsersPairId()

    response.json({
        message: 'Usuarios con id PAR',
        length: usersPairId.length,
        payload: usersPairId
    })
}

const getById = (request, response) => {
    const { id } = request.params
    console.log(request.params.id)
    console.log(id)

    response.json({ status: 200, message: 'get By Id', payload: id })
}

const createUser = (request, response) => {
    const  body  = request.body
    const newUser = usersService.createUser(body)
    console.log(newUser, 'controller')
    response.json({ status: 201, message: 'create user', payload: newUser })
}

export default {
    getAllUsers,
    getUsersPairId,
    getById,
    createUser
}