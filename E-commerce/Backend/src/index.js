import express from "express"
import dotenv from "dotenv"
import router  from "./Routers/auth.router.js";
import cookieparser from "cookie-parser" 
import connect from  './lib/connection.js'
import cors from 'cors'
const app = express()
dotenv.config();
connect()

const port = process.env.PORT
app.use(cors({origin:true,credentials:true}))
app.use(express.json())
app.use(cookieparser())
app.use('/api/auth',router)
console.log(port)
app.listen(port,()=>{console.log('app started listening')})

