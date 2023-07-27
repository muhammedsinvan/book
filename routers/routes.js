import express from "express";
import { getAllBooks,getOneBook } from "../helpers/get.js";
import { createBook } from "../helpers/creat.js";
import { updateOneBook } from "../helpers/update.js";
import { deleteOneBook } from "../helpers/delete.js";


const router = express.Router();

router.get('/getallbooks',getAllBooks);

router.get('/getonebook/:bookid',getOneBook);

router.post('/newbook',createBook);

router.put('/updateonebook/:bookid',updateOneBook)

router.delete('/deleteonebook/:bookid',deleteOneBook)


export default router;