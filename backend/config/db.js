import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://fatimaumer862_db_user:fatima123@cluster0.fql9y1t.mongodb.net/goldensliver')
    .then(()=>{
        console.log("DB Connected")
    })
}