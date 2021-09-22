import { Component } from "react";
import Form from "../../components/form/form";
import RegisterController from "../../controllers/registerController";
import "../../styles/form.css";

export default class Register extends Component{
    
    render(){
        let username=[{
            "id":1,
            "placeholder":"Username",
            "id":"exampleFirstName",
            "type":"text"
        }];
        let email=[{
            "id":2,
            "placeholder":"Email",
            "id":"exampleEmail",
            "type":"email"
        }];
        let passwords=[{
            "id":3,
            "placeholder":"Password",
            "id":"password",
            "type":"password"
        },
        {
            "id":4,
            "placeholder":"Repeat Password",
            "id":"Repeatedpassword",
            "type":"password"
        }
    ];
    let inputs = [username,email,passwords]
        return(
        <>
            <Form pageName='Regsiter' onWrite={   new RegisterController().collectData()  } 
            inputs={inputs} submit="If have an account, signin!" href='/login'/>
        </>
        );
    }
}