import rootReducer from "./reducer/index";
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const BookStore = createStore(rootReducer,applyMiddleware(thunk));
// console.log(BookStore);
export default BookStore;