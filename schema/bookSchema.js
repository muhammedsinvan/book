import mongoose from "mongoose";

const addBookSchema = mongoose.Schema({
    book:({type:String,require:true}),
    author:({type:String,require:true})
});

const book = mongoose.model('books',addBookSchema);
export default book;
