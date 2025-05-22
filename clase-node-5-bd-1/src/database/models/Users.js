import mongoose from "mongoose";

// first_name
// "Dario"
// last_name
// "Martinho"
// email
// "dmartinho0@dion.ne.jp"
// gender
// "Male"
// age
// 54

// DEFINIR EL MODELO
const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    age:Number,
    email: {
        type: String,
        require: true
    },
    gender: String,
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

export default User