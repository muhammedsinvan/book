import express from "express";
import dotenv from "dotenv";
import router from "./routers/routes.js";

const app = express();
dotenv.config();

app.use(express.json({limit:'25mb'}));

app.use('/',router)

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log("Server Listening on PORT:", PORT)
})