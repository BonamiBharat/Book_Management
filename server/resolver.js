import {nanoid} from 'nanoid';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/book', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{console.log('Connection successfully')})
.catch((error)=>{console.log(error)});

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
    ISBN: String
});

const User = mongoose.model("User",UserInput);
const BookManage = mongoose.model("BookManage",BookInput);

let bookHolder=[]; //database
let userData = []; //user database

const resolver = {
    Query: {
        getBooks : (parent,{id},ctx,info) => {  
            console.log("run", id);
            
            let bookData = bookHolder.filter((book) => {
                console.log(id);
                return book.id == id;
            });
            return bookData;
        },

        getBooksAll : (parent,data,ctx,info) => {  
            console.log("run2");
            console.log(bookHolder);
            return bookHolder;
        }
        
    },
    Mutation: {
        createBooks(parent,{booData},ctx,info){  
            // let id = nanoid();
            const CreateUserInDatabase = new User({
                id: nanoid(),
                name: booData.name,
                author: booData.author,
                genre: booData.genre,
                ISBN: booData.ISBN
            }) 

            CreateUserInDatabase.save();
            console.log("run createBooks");

            return {name: booData.name,  author: booData.author,  genre: booData.genre, ISBN: booData.ISBN};
        },

        loginCheck(parent,{logindata},ctx,info){

          let check = userData.filter((user)=>{
              return (user.userid == logindata.userid && user.pwd == logindata.pwd);
          })
            
            return (check.length)?{
                token: nanoid(),
                status: true
            }:{status: false}

        },

        createUser(parent,{userdata},ctx,info){

            const CreateUserInDatabase = new BookManage({
                name: userdata.name,
                userid: userdata.userid,
                pwd: userdata.pwd,
                description: userdata.description
            });

            CreateUserInDatabase.save();

            return {
                name: userdata.name,
                userid: userdata.userid,
                pwd: userdata.pwd,
                description: userdata.description
            }
        }

    } 

}

export default resolver;