import User from "../models/User.model.js"
import {encodeToken} from "../lib/jwt.js"
export const login =async (req,res)=>{
const {email,password} = req.body;

try {
    if(!email || !password){
        return res.status(400).json({msg:'all fields are required'})
    }
    const user = await User.findOne({email,password})
    if(!user)
        return  res.status(400).json({msg:'invalid details'})
    encodeToken(user._id,res)
    return res.status(200).json({name:user.name,msg:'succesfull'})

} catch (error) {
    console.log('error')
    return res.status(500).json({msg:'error with server'})
}
}
export const signup = async (req,res)=>{
    const {email,name,password}=req.body;
    try {
        if(!email || !name || !password){
            return res.status(400).json({msg:'all fields are required'})
        }
        const user = await User.findOne({email});
        if(user)
            return res.status(400).json({msg:'user already exists '})
        const newuser = new User({email:email,password:password,name:name})
       await newuser.save()
        return res.status(200).json({msg:'registered successfully'})
    } catch (error) {
        console.log(error)
        return res.status(500).json({msg:'error with server'})
    }
}
export const logout = async (req,res)=>{
    try {
        const encoded_token = req.cookies.jwt;
        if(!encoded_token)
            return res.status(200).json({msg:'already delted'})
        res.cookie('jwt',{},{maxAge:0})
        return res.status(200).json({msg:'logged out'})
    } catch (error) {
        console.log(error)
        return res.status(500).json({msg:'server error'})
    }
  
    
}