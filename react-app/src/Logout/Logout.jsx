import { useDispatch } from "react-redux";
import { Redirect } from "react-router";
import { reduxRemove } from "../App/ReduxPersist";
import { LogoutAction } from "./LogoutAction";
export function Logout(){
    let dispatch = useDispatch();
    reduxRemove();
    dispatch(LogoutAction());
    return(
        <Redirect to='/'/>
        )
}