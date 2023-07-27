import book from "../schema/bookSchema.js";

//Adding new book
const createBook = async(req,res)=>{
    try{
        const newBook = new book(req.body);
        const bookAdded = await newBook.save();
        res.status(201).json(bookAdded);
    }catch(error){
        res.status(500).json(error.message);
    }
}

export {createBook};