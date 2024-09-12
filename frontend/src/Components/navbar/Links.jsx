import { Link } from "react-router-dom";
function Links(props){
    let classe = "navbar-brand "+props.class;
        return(
        <div>
            <Link className={classe} to={props.href}>
                {props.text}
            </Link>
        </div>
        )
}
export default Links;