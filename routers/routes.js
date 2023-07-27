import express from "express";
import { getAllBooks,getOneBook } from "../helpers/get.js";


const router = express.Router();

router.get('/getallbooks',getAllBooks)

router.get('/getonebook/:bookid',getOneBook)


export default router;