import { Component } from "react";

export default class Button extends Component{
    render(){
        return (
            <>
            <button 
            onClick={this.props.click}
            type={this.props.type} 
            className={this.props.class} style={this.props.style}>{this.props.text}</button>
            </>
        );
    }
}