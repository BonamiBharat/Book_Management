import {nanoid} from 'nanoid';
import { combineResolvers } from 'graphql-resolvers';
import {CreateUserBookData} from './service/createUser.js';
import {GetData} from './service/getdata.js';
import jwt from 'jsonwebtoken';

const isAuthentication = async(parent,data,ctx,info)=>{
    // if(ctx == 'null'){
    //     console.log(ctx);
    //     return [{name: false}];
    // }
    try{
    const token = await jwt.verify(ctx,'8237423174237423749823749821734982374271483434234234');
    }catch(error){
       return [{status: false}];
    }
}

const resolver = {
    Query: {    getBooks : (async(parent,data,ctx,info) => {  
        // console.log("run2");
        // console.log(bookHolder);
        const result = await GetData.getallbook();
        // console.log(result);
        return result;
    }
  ),
        getBooksAll : combineResolvers( isAuthentication,(async(parent,data,ctx,info) => {  
            // console.log("run2");
            // console.log(bookHolder);
            const result = await GetData.getallbook();
            // console.log(result);
            return result;
        })
      )
    },
    Mutation: {
        createBooks: combineResolvers( isAuthentication ,(parent,{booData},ctx,info) => {  
            // console.log(data);
            CreateUserBookData.CreateBookData({
                name: booData.name,
                author: booData.author,
                genre: booData.genre,
                isbn: booData.isbn,
                status: true
            });

            // console.log("createBooks", booData);

            return {name: booData.name,  author: booData.author,  genre: booData.genre, isbn: booData.isbn};
        }),

        loginCheck: async(parent,{logindata},ctx,info)=>{

           const result = await GetData.getuser(logindata.userid,logindata.pwd);
        
           if(result){
            //   let unique_id = nanoid();
            let token = await jwt.sign({id: logindata.userid }, '8237423174237423749823749821734982374271483434234234');
              console.log(token);
              return {status: true,token: token};
           }

            return {
                status: false
            }

        },

        createUser: combineResolvers( isAuthentication,async(parent,{userdata},ctx,info)=>{
            console.log(userdata);
            CreateUserBookData.CreateUserData({
                name: userdata.name,
                userid: userdata.userid,
                pwd: userdata.pwd,
                description: userdata.description,
                status: true
            });
           
            return {
              status : true
            }
        })

    }

}

export default resolver;