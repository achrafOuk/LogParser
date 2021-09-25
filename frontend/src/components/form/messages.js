import { Component } from "react";
import Message from "./message";

class Messages extends Component {
    render() { 
        let errorType ="alert alert-"+this.props.type ;
        let isEmpty = typeof(this.props.messages)!=='undefined' && this.props.messages.length>0 ;
        let show = isEmpty ? 'block':'none';
        let element = !isEmpty ? <div /> : 
                < Message messages={this.props.messages}/>;
        return( 
        <div style={{display:show}}className={errorType} role="alert">
            {element}
        </div>
        );
    }
}
 
export default Messages;
