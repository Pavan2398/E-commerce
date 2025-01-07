import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
export const encodeToken = (id ,res)=>{
const   token = jwt.sign({id},process.env.SECRET)
return res.cookie('jwt',token,{maxAge:1000*60*60*24});
}
