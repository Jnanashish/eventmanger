import { createStore, combineReducers, applyMiddleware } from "redux";
import eventReducer from "./reducer/eventReducer.js";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({ eventReducer });

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

//console.log(store.getState());

export default store;
