// import {nanoid} from 'nanoid';
import {CreateUserBookData} from './service/createUser.js';
import {GetData} from './service/getdata.js';

let bookHolder=[]; //database
let userData = []; //user database

const resolver = {
    Query: {
        getBooks : (parent,{_id},ctx,info) => {  
            // console.log("run", _id);
            
            // let bookData = bookHolder.filter((book) => {
            //     console.log(id);
            //     return book.id == id;
            // });
            // return bookData;
        },

        getBooksAll : async(parent,data,ctx,info) => {  
            console.log("run2");
            // console.log(bookHolder);
            const result = await GetData.getallbook();
            // console.log(result);
            return result;
        }
        
    },
    Mutation: {
        createBooks(parent,{booData},ctx,info){  
            // console.log(data);
            CreateUserBookData.CreateBookData({
                name: booData.name,
                author: booData.author,
                genre: booData.genre,
                isbn: booData.isbn
            });

            console.log("createBooks", booData);

            return {name: booData.name,  author: booData.author,  genre: booData.genre, isbn: booData.isbn};
        },

        async loginCheck(parent,{logindata},ctx,info){

        //   let check = userData.filter((user)=>{
        //       return (user.userid == logindata.userid && user.pwd == logindata.pwd);
        //   })

           const result = await GetData.getuser(logindata.userid,logindata.pwd);
            
            return {
                status: result
            }

        },

        createUser(parent,{userdata},ctx,info){
            CreateUserBookData.CreateUserData({
                name: userdata.name,
                userid: userdata.userid,
                pwd: userdata.pwd,
                description: userdata.description
            });
           
            return {
              status : true
            }
        }

    } 

}

export default resolver;