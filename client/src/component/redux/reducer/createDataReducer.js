const sendRequestForCreateBookData = (state,action)=>{
   //   console.log("state",state);
    return sendRequest(action);
   }

   const sendRequest = async(action)=>{

try{   
            await action.payload.createData({
                   name: action.payload.name,
                   author: action.payload.author,
                   genre: action.payload.genre,
                   author: action.payload.author,
                   isbn: action.payload.isbn
                 });
              }catch(error){
            //   console.log(error);
              }
       return 'working';
 }



 export default sendRequestForCreateBookData;