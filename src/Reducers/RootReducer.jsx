import { combineReducers } from "redux";
import ListReducer from './ListReducer';
import CommonReducer from './CommonReducer';

export default combineReducers({
    List: ListReducer,
    CommonReducer
})