import { useDispatch } from "react-redux";
import { Redirect } from "react-router";
import { reduxRemove } from "../App/ReduxPersist";
import { LogoutAction } from "../Login/LoginActions";
export function Logout(){
    let dispatch = useDispatch();
    dispatch(LogoutAction());
    reduxRemove();
    return(
        <Redirect to='/'/>
    )
}