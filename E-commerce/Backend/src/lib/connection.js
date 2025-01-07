import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
async function connect(){
    mongoose.connect(process.env.MONGOURL).then(()=>{console.log('mongodb connected')}).catch((error)=>{console.log(error)})
}
export default connect