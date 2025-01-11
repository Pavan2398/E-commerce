import mongoose from "mongoose"
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,

    },
    category:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    images:{
        type:[String],
        required:true
    }
})

const product = mongoose.model('product',productSchema)
export default product