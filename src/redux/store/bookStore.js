import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from 'redux-thunk'
import combine from "../reducer/combine";

const store =  createStore(combine,applyMiddleware(thunk))

export default store;

