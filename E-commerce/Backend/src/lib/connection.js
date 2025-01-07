import mongoose from 'mongoose'

async function connect(){
    mongoose.connect('mongodb://localhost:27017/ecommerce').then(()=>{console.log('mongodb connected')}).catch((error)=>{console.log(error)})
}
export default connect