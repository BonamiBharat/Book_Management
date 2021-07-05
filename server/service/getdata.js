import { UserEntry,BookEntry } from '../model/model.js';

export class GetData {
    static async getallbook(){
       const bookList = await BookEntry.find().select({name:1,author:1,genre:1,isbn:1});
       return bookList;
    }

    static async getuser(userid, pwd){
      const userdetails = await UserEntry.find({userid,pwd});
      if(userdetails.length){
          return true;
      }else{
         return false;
      }
    }
}