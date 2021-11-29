import Links from "./Links"
export function DropDown(props){
    let isShow = props.isShow ? 'block':'none' ;
    return (
    <nav class="nav-item dropdown" onClick={props.showDropMenu}>
                <a  href="#" 
                role="button" 
                data-toggle="dropdown"
                aria-haspopup="true" 
                 aria-expanded="false">
                {props.user}
                </a>
                <div class="dropdown-menu" style={{display:isShow}} aria-labelledby="navbarDropdown">
                <Links class ="dropdown-item" href='/logout' text='logout' />
                </div>
    </nav>

    )

}