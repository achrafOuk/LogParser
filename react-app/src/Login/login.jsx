import React from "react";
import {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import Navbar from "../Components/navbar/Navbar";
import Button from "../Components/shared/button";
import { loginAction } from "./LoginActions";
import { createBrowserHistory } from 'history';
export default function Login(props) {
    let [user, letUser] = useState('');
    let [pwd, letPwd] = useState('');
    let [msg, useMsg] = useState('');
    let dispatch = useDispatch();
    const SubmitLogin = (e) =>{
        e.preventDefault();
        let userInfo={
            'username':user,
            'password':pwd
        };
        const options = {
            method: 'POST',
            body: JSON.stringify(userInfo),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        };
        let senddata = async () =>{
            let req = await fetch('http://127.0.0.1:8000/api/login/',options)
            .then(response => { return response.json() }).catch(err => { return (err)} ) ;
            if(typeof(req.detail)!=="undefined" )
            {
            }
            else{
                dispatch(loginAction(user,req.access,req.refresh));
                props.history.push('/home');
            }
        }
        return senddata();
    }
    return (
        <>
            <Navbar/>
            <div className="container">
                <div className="card o-hidden border-0 shadow-lg my-5">
                    <h1>Login</h1>
                    <div className="card-body p-0">
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <div className="p-5">
                                    <div className="text-center"></div>
                                    <form  onSubmit={SubmitLogin} method="POST" class="user">
                                        <div class="form-group">
                                            <input onChange={
                                                    (e) => letUser(e.target.value)
                                                }
                                                type="text"
                                                class="form-control form-control-user"
                                                id="exampleFirstName"
                                                placeholder="Username"/>
                                        </div>
                                        <div class="form-group">
                                            <input onChange={
                                                    (e) => letPwd(e.target.value)
                                                }
                                                type="password"
                                                class="form-control form-control-user"
                                                id="password"
                                                placeholder="Password"/>
                                        </div>
                                        <Button text="submit" class="btn btn-primary btn-user btn-block"
                                            style={
                                                {background: '#d6002f'}
                                            }/>
                                    </form>
                                    <hr/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
