import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDb = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.DATABASE_URL,{
            useUnifiedTopology:true,
            useNewUrlParser:true,
        })  
        console.log(`MongoDb Connnected : ${conn.connection.host}`)
    }catch(error){
        console.log(`Error:${error.message}`);
        process.exit(1)
    }
}