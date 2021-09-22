import { Component } from "react";
import Input from "./input";
export default class InputGroup extends Component{
    render(){
        return(
        <div class="form-group">
           { this.props.inputs.map( input=> <Input  onWrite={this.props.onWrite} key={input.id} input={input}  />) }
        </div>
        )
    }
}