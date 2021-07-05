import { UserEntry,BookEntry } from '../model/model.js';

export class CreateUserBookData {

   static CreateBookData({_id,name,author,genre,isbn}){
      const CreateBookEntry = new BookEntry({
         name,
         author,
         genre,
         isbn
     }) 

     CreateBookEntry.save();
   }

   static CreateUserData({name, userid, pwd, description}){
      const CreateUserEntry = new UserEntry({
         name,
         userid,
         pwd,
         description
     });

     CreateUserEntry.save();
   }
}
