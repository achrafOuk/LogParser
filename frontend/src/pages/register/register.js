import { Component } from "react";
import Button from "../../components/form/button";
import InputGroup from "../../components/form/inputGroup";
import LINK from "../../components/form/link";

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
        },

    ];

        return(
        <div className="container">
        <div className="card o-hidden border-0 shadow-lg my-5">
        <h1>Sign up</h1>
            <div className="card-body p-0">
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="p-5">
                            <div className="text-center">
                                <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                            </div>
                            <form className="user">
                                <InputGroup inputs={username}/>
                                
                                <InputGroup inputs={email}/>
                                <InputGroup inputs={passwords}/>
                                <Button 
                                text="submit" 
                                class="btn btn-primary btn-user btn-block" 
                                style={{background:'#D6002F'}}></Button>
                                <hr/>
                            </form>
                            <hr/>
                            <LINK text='Forgot password?' href='*'/>
                            <LINK  text='Already have an account? Login!' href='*'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
        );
    }
}