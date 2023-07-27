import book from "../schema/bookSchema.js";

//update an existing book by its ID
const updateOneBook = async (req,res)=>{
    const bookId = req.params.bookid;
    try{
        let updatedBook = await book.findByIdAndUpdate(bookId,req.body);
        if(updatedBook == null){
            res.status(404).json("The book does not exist");
        }else{
            res.status(200).json("Successfully updated");
        }
    }catch(error){
        res.status(500).json(error.message);
    }
}

export {updateOneBook};