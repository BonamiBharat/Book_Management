import rootReducer from "./reducer";
import {createStore} from 'redux';

const BookStore = createStore(rootReducer);

export default BookStore;