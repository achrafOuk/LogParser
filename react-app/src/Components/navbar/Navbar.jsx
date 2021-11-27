import { useSelector } from "react-redux";
import Links from "./Links"
function Navbar(){
        let user = useSelector( (state)=>state.login.user );
        if(user){
                return(
                <nav style={{ width:'100%' }} class="navbar navbar-light bg-light justify-content-between">
                <Links href='/home' text='Log Parser' />
                <div class="form-inline">
                <Links href='/home' text={user} />
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