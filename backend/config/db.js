import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
export const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGDODB_URI)
        console.log('Mongo db connected successfully')
    } catch (error) {
        console.log('error connecting Mongo db',error.message)
    }
}






