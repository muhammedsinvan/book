import book from "../schema/bookSchema.js";

//Fetching all books
const getAllBooks = async (req,res)=>{
    try{
        let allBooks = await book.find({});
        res.status(200).json(allBooks);
    }catch(error){
        res.status(500).json(error.message);
    }

}

//Fetching individul book by its id
const getOneBook = async(req,res)=>{
    const bookId = req.params.bookid;
    try{
        let oneBook = await book.findOne({_id:bookId});
        console.log(oneBook)
        if(oneBook == null){
            res.status(404).json("The book id is not proper");
        }else{
            res.status(200).json(oneBook);
        }
    }catch(error){
        res.status(500).json(error.message);
    }
}

export {getAllBooks,getOneBook};