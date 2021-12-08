import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { LogoutAction } from "../../Login/LoginActions";
import Links from "./Links"
export function DropDown(props){
    let isShow = props.isShow ? 'block':'none' ;
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
        <Links class ="dropdown-item" href='/logout' text='logout' />
        </div>
    </nav>

    )

}