import book from "../schema/bookSchema.js";

//Adding new book by checking already exist or not
const createBook = async(req,res)=>{
    const Book = req.body.book;
    try{
        const findBook = await book.findOne({book:Book})
        console.log(findBook)
        if(findBook){
            res.status(403).json('The book is alredy exist');
        }else{
        const newBook = new book(req.body);
        const bookAdded = await newBook.save();
        res.status(201).json(bookAdded)
        }
    }catch(error){
        res.status(500).json(error.message);
    };
};

export {createBook};