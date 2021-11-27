import { combineReducers } from "redux";
import { loginReducer } from "../Login/LoginReducers";
export const allReducer = combineReducers({
    login:loginReducer,
});

