import mongoose from 'mongoose'
const userschema = new mongoose.Schema({
    email:{
        required:true,
        unique:true,
        type:String,
    },
    name:{
        required:true,
        type:String
    },
    password:{
        required:true,
        type:String

    }
},{timestamps:true})
const User = mongoose.model('User',userschema)
export default User