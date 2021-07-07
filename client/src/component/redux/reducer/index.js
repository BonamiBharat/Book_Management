import changeNumber from "./UpDown";
import {combineReducers} from 'redux';
import sendRequestForCreateBookData from "./createDataReducer";

const rootReducer = combineReducers({
    changeNumber,
    sendRequestForCreateBookData
})

export default rootReducer;

