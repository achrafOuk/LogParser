import { Component } from "react";
import Message from "./message";

class Messages extends Component {
    render() { 
        let errorType ="alert alert-"+this.props.type ;
        return( 
            <div className={errorType} role="alert">
            < Message messages={this.props.messages}/>
            </div>
        );
    }
}
 
export default Messages;
