import { Component} from "react";
import Form from "../../components/form/form";
import Navbar from "../../components/navbar/navbar";
import RegisterController from "../../controllers/registerController";
import "../../styles/form.css";

export default class Register extends Component{
    constructor(){
        super();
        this.state={
            name:'',
            email:'',
            pdw:'',
            repwd:'',
        }
    }
    render(){
        let username=[{
            "key":1,
            "placeholder":"Username",
            "id":"exampleFirstName",
            "type":"text"
        }];
        let email=[{
            "key":2,
            "placeholder":"Email",
            "id":"exampleEmail",
            "type":"email"
        }];
        let passwords=[{
            "key":3,
            "placeholder":"Password",
            "id":"password",
            "type":"password"
        },
        {
            "key":4,
            "placeholder":"Repeat Password",
            "id":"Repeatedpassword",
            "type":"password"
        }
    ];
    let inputs = [username,email,passwords]
    let registerControler =   new RegisterController();
        return(
        <>
            <Navbar token={() => this.props.token()}/>
            <Form key='1' pageName='Regsiter' 
            onSubmit={ (e) =>  registerControler.sendData(e) } 
            onEdit={  registerControler.collectData } 
            inputs={inputs} submit="If have an account, signin!" href='/login'/>
        </>
        );
    }
}