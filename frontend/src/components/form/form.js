import { Component } from "react";
import Button from "../../components/form/button";
import InputGroup from "../../components/form/inputGroup";
import Link from "../../components/form/link";
import Messages from "../../components/form/messages";
import "../../styles/form.css";
export default class Form extends Component{
    constructor(){
            super();
            this.state={
                msg:[],
            }
        }
    updateMsg(value){
            this.setState(() =>{
                return {msg:value};
            });
        }

    render(){
        return(
        <div className="container">
        <div className="card o-hidden border-0 shadow-lg my-5">
        <h1>{this.props.pageName}</h1>
            <div className="card-body p-0">
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="p-5">
                            <div className="text-center">
                            </div>
                            <form 
                            onSubmit={ (e)=> this.updateMsg(this.props.onSubmit(e) ) } 
                            className="user">
                                <Messages messages={this.state.msg} type="danger" />
                                {
                                this.props.inputs.map( 
                                input => <InputGroup 
                                key={this.props.input} 
                                onWrite={ ()=> this.updateMsg(this.props.onEdit() ) } 
                                inputs={input}/> )}
                                <Button 
                                text="submit" 
                                class="btn btn-primary btn-user btn-block" 
                                style={{background:'#d6002f'}}/>
                            </form>
                            <hr/>
                            <Link  text={this.props.submit} href={this.props.href}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        );
    }
}