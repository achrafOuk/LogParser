import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { DropDown } from "./DropDown";
import Links from "./Links"
function Navbar(props){
        let user = useSelector( (state)=>state.login.user );
        let [show,SetShow] = useState(false);
        const showDropMenu = ()=> SetShow(!show);
        if(user){
                return(
                <nav style={{ width:'100%' }} class="navbar navbar-light bg-light justify-content-between">
                <Links href='/home' text='Log Parser' />
                <div class="form-inline" style={{"margin-right": "19%"}}>
                <DropDown user={user} isShow={show} showDropMenu={showDropMenu} history={props.history} />
                </div>
                </nav>
                )
        }
        return(
                <nav style={{ width:'100%' }} class="navbar navbar-light bg-light justify-content-between">
                <Links href='/' text='Log Parser' />
                <div class="form-inline">
                <Links href='/login' text='Login' />
                <Links href='/register' text='Register' />
                </div>
                </nav>
        )
}
export default Navbar;