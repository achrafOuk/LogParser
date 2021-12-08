import React from "react";
import { useState} from "react";
import { useDispatch } from "react-redux";
import Navbar from "../Components/navbar/Navbar";
import Button from "../Components/shared/button";
import { loginAction } from "./LoginActions";
import Msg from "../Components/shared/Msg";
import { setlogin } from "./setlogin";
import { useSelector } from "react-redux";
import Links from '../Components/navbar/Links';
export default function Login(props) {
    //user
    let [user, letUser] = useState('');
    //password
    let [pwd, letPwd] = useState('');
    // error msg show
    let [msg, lesMsg] = useState('');
    let dispatch = useDispatch();
    let jwt = useSelector(state => state.login);
    let myuser = useSelector(state => state.login.user);
    console.log('jwt token in login:',jwt,myuser);
    //submit login
    const SubmitLogin = (e) =>{
        //prevent refresh event
        e.preventDefault();
        let senddata = async () =>{
            let req = await setlogin(user,pwd);
            if( req.status===200 ){
                dispatch(loginAction(user,req.data.access,req.data.refresh));
                props.history.push('/home');
            }
            // show error msg otherwise
            else {
                    lesMsg({type:400,msg:'Username or login are wrong'});
                    letPwd('');
            }
        }
        senddata();
    }
    return (
        <>
            <Navbar/>
            <div className="container">
                <div className="card o-hidden border-0 shadow-lg my-5">
                    <Msg classe="alert alert-danger" msg={msg}/>
                    <h1>Login</h1>
                        <div className="card-body p-0">
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <div className="p-5">
                                    <div className="text-center"></div>
                                    <form  onSubmit={SubmitLogin} method="POST" class="user">
                                        <div class="form-group">
                                            <input 
                                            onChange={
                                                    (e) => letUser(e.target.value)
                                                }
                                            type="text"
                                            class="form-control form-control-user"
                                            id="exampleFirstName"
                                            placeholder="Username"/>
                                        </div>
                                        <div class="form-group">
                                            <input 
                                            onChange={
                                                    (e) => letPwd(e.target.value)
                                                }
                                            value = {pwd}
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
                                    <Links text="If you do not have account ,singup" href='/register'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
