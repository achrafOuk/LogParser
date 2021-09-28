import { Component } from "react";
import Message from "./message";

class Messages extends Component {
    render() { 
        let errorType ="alert alert-"+this.props.messages.type ;
        let isEmpty = typeof(this.props.messages.content)!=='undefined' 
        && this.props.messages.content.length>0 ;
        let show = isEmpty ? 'block':'none';
        let element = !isEmpty ? <div /> : 
                < Message messages={this.props.messages.content}/>;
        return( 
        <div style={{display:show}} className={errorType} role={this.props.messages.type}>
            {element}
        </div>
        );
    }
}
 
export default Messages;
