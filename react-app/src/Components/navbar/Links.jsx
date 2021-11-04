import { Link } from "react-router-dom";
function Links(props){
        return(
        <>
            <Link className="navbar-brand" to={props.href}>
                {props.text}
            </Link>
        </>
        )
}
export default Links;