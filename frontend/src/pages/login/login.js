import { Component } from "react";
import Form from "../../components/form/form";
import LoginController from "../../controllers/loginController";
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
        let login = new LoginController();
        return(
            <>
            <Form pageName='Login' 
            inputs={inputs} 
            onSubmit={ (e) =>  login.sendData(e) } 
            onEdit={  login.collectData } 
            submit="Don't have an account? signin!" href='/register'/>
            </>
        );
    }
}