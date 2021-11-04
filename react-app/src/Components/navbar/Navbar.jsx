import Links from "./Links"
function Navbar(){
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