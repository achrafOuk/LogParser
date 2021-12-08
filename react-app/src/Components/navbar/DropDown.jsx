import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { LogoutAction } from "../../Login/LoginActions";
import Links from "./Links"
export function DropDown(props){
    let isShow = props.isShow ? 'block':'none' ;
    let dispatch = useDispatch();
    const logout = () =>{
        //remove login info from redux
        dispatch(LogoutAction());
        //remove login info from local storage
        localStorage.removeItem('state');
        props.history.push('/login');
    }
    return (
    <nav class="nav-item dropdown" onClick={props.showDropMenu}>
        <div  href="#" 
        role="button" 
        style={{cursor:"pointer"}}
        data-toggle="dropdown"
        aria-haspopup="true" 
        aria-expanded="false">
        {props.user}
        </div>
        <div class="dropdown-menu" style={{display:isShow}} aria-labelledby="navbarDropdown">
        <p class="dropdown-item" onClick={logout} >logout</p>
        <Links class ="dropdown-item" href='/logout' text='logout' />
        </div>
    </nav>

    )

}