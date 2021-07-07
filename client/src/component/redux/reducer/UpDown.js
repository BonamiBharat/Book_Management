const initialState = {count:0};

const changeNumber = (state = initialState, action) =>{
    
   switch(action.type){
       case "INCREAMENT" : return {...state,count:state.count+1};

       case "DECREAMENT" : return {...state,count:state.count-1};

       default: return state;
   }

}

export default changeNumber;