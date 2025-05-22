import users from "../data/users.js";

const getAllUsers = () => {
    return users
}

const getUsersPairId = () => {
    const result = users.filter(user => Number(user.id) % 2 === 0)
    console.log(result)
    return result
}

const createUser = (body) => {
    const newId = users.length + 1
    const newUser = Object.assign(body, {id: newId})
    console.log(newUser, 'service')
    users.push(newUser)

    return newUser
}

const usersService = {
    getAllUsers,
    getUsersPairId,
    createUser
}

export default usersService