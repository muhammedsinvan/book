import book from "../schema/bookSchema.js";

//Fetching all books
const getAllBooks = async (req,res)=>{
    try{
        let allBooks = await book.find({});
        res.json(allBooks);
    }catch(error){
        res.json(error).status(500);
    }

}

//Fetching individul book by its id
const getOneBook = async(req,res)=>{
    const bookId = req.params.bookid;
    try{
        let oneBook = await book.find({_id:bookId});
        res.json(oneBook);
    }catch(error){
        res.json(error).status(500);
    }
}

export {getAllBooks,getOneBook};