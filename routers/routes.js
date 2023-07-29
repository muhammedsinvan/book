import express from "express";
import { getAllBooks,getOneBook } from "../helpers/get.js";
import { updateOneBook } from "../helpers/update.js";
import { deleteOneBook } from "../helpers/delete.js";
import { validate } from "../validator/createBook.js";
import {createBook} from "../helpers/creat.js"
import {validationResult} from "express-validator"


const router = express.Router();

//Retrieve all books from the server
router.get('/getallbooks',getAllBooks);

//Retrieve a specific book by its ID
router.get('/getonebook/:bookid',getOneBook);

//Add a new book to the collection
 //router.post('/newbook',createBook);
router.post('/newbook',validate,(req,res,next)=>{
    const errors = validationResult(req);
    const err = errors.array();
    if(!err.length){
        createBook(req,res)
    }else{
       res.status(422).json(err);
    };
});

//Update an existing book by its ID
router.put('/updateonebook/:bookid',updateOneBook);

//Delete a book by its ID
router.delete('/deleteonebook/:bookid',deleteOneBook);


export default router;