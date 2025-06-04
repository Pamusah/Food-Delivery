
import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import dotenv from 'dotenv/config.js'
import foodRouter from './routes/foodRoute.js'
import userRouter from './routes/userRouters.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

// app config
const app = express()

const port = 4000
//
//middleware
app.use(express.json())
app.use(cors())
// dotenv.config()

//db connection
connectDB()

//api endpoints
app.use('/api/food',foodRouter)
app.use('/images',express.static('uploads'))
app.use('/api/user',userRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)

app.get('/home',(req,res)=>{
    res.send("Welcome Home")
})


app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`)
})






