import { Component } from "react";

export default class Input extends Component{
    render(){
        return (
            <>
                <input onChange={this.props.onWrite} 
                type={this.props.input.type} className="form-control form-control-user" id={this.props.input.id}
                    placeholder={this.props.input.placeholder}/>
            </>
        );
    }
}