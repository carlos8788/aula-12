import User from "../database/models/Users.js";

const getAllUsers = async () => {
    // const users = await User.find({age: {$lt: 50}})
    const users = await User.find()
    return users.filter(user => user.age < 50)
}

export default {
    getAllUsers
}
