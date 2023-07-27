import express from "express";
import { getAllBooks,getOneBook } from "../helpers/get.js";
import { createBook } from "../helpers/creat.js";
import { updateOneBook } from "../helpers/update.js";
import { deleteOneBook } from "../helpers/delete.js";


const router = express.Router();

//Retrieve all books from the server
router.get('/getallbooks',getAllBooks);

//Retrieve a specific book by its ID
router.get('/getonebook/:bookid',getOneBook);

//Add a new book to the collection
router.post('/newbook',createBook);

//Update an existing book by its ID
router.put('/updateonebook/:bookid',updateOneBook);

//Delete a book by its ID
router.delete('/deleteonebook/:bookid',deleteOneBook);


export default router;