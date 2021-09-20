import { Component } from "react";
import Button from "../../components/form/button";
import InputGroup from "../../components/form/inputGroup";
import LINK from "../../components/form/link";
import Form from "../../components/form/form";
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
            <Form pageName='Regsiter' inputs={inputs} submit="If have an account, signin!" href='/login'/>
        </>
        );
    }
}