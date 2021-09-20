import { Component } from "react";
import Form from "../../components/form/form";
import "../../styles/form.css";
export default class Login extends Component{
    render(){
        let username=[{
            "id":1,
            "placeholder":"Username",
            "id":"exampleFirstName",
            "type":"text"
        }];
        
        let passwords=[{
            "id":3,
            "placeholder":"Password",
            "id":"password",
            "type":"password"
        }];
        let inputs =[username,passwords];
        return(
            <>
            <Form pageName='Login' inputs={inputs} submit="Don't have an account? signin!" href='/register'/>
            </>
        );
    }
}