import usersService from "../services/users.service.js"

const getAllUsers = async (req, res) => {
    const users = await usersService.getAllUsers()

    res.json({status: 200, message: 'Users', payload: {
        data: users,
        length: users.length
    }})
}

export default {
    getAllUsers
}