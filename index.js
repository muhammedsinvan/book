import express from "express";
import dotenv from "dotenv";
import router from "./routers/routes.js";
import { connectDb } from "./config/db.js";
import cors from "cors";

const app = express();
dotenv.config();

connectDb();

app.use(express.json({limit:'25mb'}));
app.use(express.urlencoded({limit:'25mb',extended:true}))
app.use(cors())

app.use('/',router);

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log("Server Listening on PORT:", PORT)
})