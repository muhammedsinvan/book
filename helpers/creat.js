import book from "../schema/bookSchema.js";

//Adding new book
const createBook = async(req,res)=>{
    try{
        const newBook = new book(req.body);
        const bookAdded = await newBook.save();
        res.json(bookAdded).status(200);
    }catch(error){
        res.json(error).status(500);
    }
}

export {createBook};