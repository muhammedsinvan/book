import mongoose from "mongoose";

const addBookSchema = mongoose.Schema({
    book:({type:String,required:true}),
    author:({type:String,required:true})
});

const book = mongoose.model('books',addBookSchema);
export default book;
