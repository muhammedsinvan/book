import express from "express";
import { getAllBooks,getOneBook } from "../helpers/get.js";
import { createBook } from "../helpers/creat.js";


const router = express.Router();

router.get('/getallbooks',getAllBooks);

router.get('/getonebook/:bookid',getOneBook);

router.post('/newbook',createBook);


export default router;