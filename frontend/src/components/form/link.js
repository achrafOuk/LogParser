import { Link } from "react-router-dom";

import { Component } from "react";
class LINK extends Component {
    render() { 
        return(
            <div className="text-center">
            <Link className="small" to={this.props.href}>{this.props.text}</Link>
            </div>
        );
    }
}
 
export default LINK;