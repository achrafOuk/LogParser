import { Component } from "react";
import { Link } from "react-router-dom";

export default class Links extends Component{
    render(){
        return(
            <>
            <Link className="navbar-brand" to={this.props.href}>
                {this.props.text}
            </Link>
            </>
        )
    }
}