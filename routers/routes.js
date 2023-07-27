import express from "express";
import { getAllBooks } from "../helpers/get.js";


const router = express.Router();

router.get('/getallbooks',getAllBooks)


export default router;