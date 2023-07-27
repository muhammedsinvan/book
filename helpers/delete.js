import book from "../schema/bookSchema.js";

//delete a book by its ID
const deleteOneBook = async(req,res)=>{
    const bookId = req.params.bookid;
    try{
        let deletedbook = await book.findByIdAndDelete(bookId);
        if(deletedbook == null){
            res.status(404).json("The book does not exist");
        }else{
            res.status(200).json("Successfully deleted");
        }
    }catch(error){
        res.status(500).json(error.message);
    }
}

export {deleteOneBook};