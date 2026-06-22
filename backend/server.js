import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'
import marketRoutes from '../backend/routes/marketRoutes.js'
import { connectDB } from './config/db.js';
import cors from 'cors'


const app = express()
const port = process.env.PORT || 4011;

app.use(cors())
app.use(express.json());
app.use("/api/market", marketRoutes);


//DB Connection
connectDB();


app.get('/',(req,res)=>{
    res.send("Api is running")
})

app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
})