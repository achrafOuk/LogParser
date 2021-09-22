import { Component } from "react";

class Message extends Component {
    render() { 
        return (
        this.props.messages.map(message=><div>{message}</div>)
        );
    }
}
 
export default Message;