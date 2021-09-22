import { Component } from "react";
import Message from "./message";

class Messages extends Component {
    render() { 
        let errorType ="alert alert-"+this.props.type ;
        let show = this.props.messages.length>0 ? 'block':'none';
        return( 
            <div style={{display:show}}className={errorType} role="alert">
            < Message messages={this.props.messages}/>
            </div>
        );
    }
}
 
export default Messages;
