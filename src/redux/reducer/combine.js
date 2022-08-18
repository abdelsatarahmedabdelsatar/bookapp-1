import { combineReducers } from "redux";
import bookReducer from "./bookReducer";
import NextReducer from './nextReducer';
import PreviuosReducer from './previuosReducer';

export default combineReducers({
   books:bookReducer,
   next:NextReducer,
   previuos:PreviuosReducer
})