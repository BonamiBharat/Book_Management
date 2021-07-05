import mongoose from 'mongoose';

const UserInput = mongoose.Schema({
    name: String,
    userid: String,
    pwd: String,
    description: String
});

const BookInput = mongoose.Schema({
    id: String,
    name: String,
    author: String,
    genre: String,
    isbn: String
});

export const UserEntry = mongoose.model("User",UserInput);
export const BookEntry = mongoose.model("BookManage",BookInput);