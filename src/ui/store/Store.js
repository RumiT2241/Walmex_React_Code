import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import UserInfoReducer from "./Reducers/UserInfoReducer";
import AgeInfoReducer from "./Reducers/AgeInfoReducer";
import thunk from "redux-thunk";
const store = createStore(
  combineReducers({
    UserInfoReducer,
    AgeInfoReducer,
  }),
  {},
  applyMiddleware(thunk)
);
export default store;
