import { Component } from "react";

export default class Button extends Component{
    render(){
        let buttonText =typeof this.props.text;
        return (
            <>
            <button type={this.props.type} 
            className={this.props.class} style={this.props.style}>{this.props.text}</button>
            </>
        );
    }
}