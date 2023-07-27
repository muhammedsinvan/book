import book from "../schema/bookSchema.js";

//Fetching all books
const getAllBooks =async (req,res)=>{
    try{
        let allBooks = await book.find({})
        res.json(allBooks)
    }catch(error){
        console.log(error)
        res.json(error).status(500);
    }

}

//Fetching individul book by its id
// const get

export {getAllBooks}