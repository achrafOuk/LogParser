import { combineReducers } from "redux";
import { loginReducer } from "../Login/LoginReducers";
import { LogoutReducer } from "../Logout/LogoutReducer";
export const allReducer = combineReducers({
    login:loginReducer,
    logout:LogoutReducer
});

