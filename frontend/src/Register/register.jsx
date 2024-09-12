import Navbar from '../Components/navbar/Navbar'
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router'
import Msg from "../Components/shared/Msg";
import { useState} from "react";
import Button from "../Components/shared/button";
import Links from '../Components/navbar/Links';
import useAxios from '../App/useAxios';
export function Register(){
    let api = useAxios();
    let myuser = useSelector(state => state.login.user);
    // error msg show
    let [msg, lesMsg] = useState('');
    //user
    let [user, letUser] = useState('');
    //password
    let [pwd, letPwd] = useState('');
    //user
    let [email, setEmail] = useState('');
    if( myuser ){
        return <Redirect to='/home'/>;
    }
    const SubmitRegister = (e) =>{
        //prevent refresh event
        e.preventDefault();
        //get user login info
        let userInfo={
            'username':user,
            'email':email,
            'password':pwd
        };
        let senddata = async () =>{
            let req = await api.post('/api/signup/', userInfo )
            .then(response => { return response; })
            .catch((error) => {
                return error.response;
            });
            console.log(req);
            if( req.status===201 ){
                lesMsg({type:200,msg:'Account was created!'});
            }
            // show error msg otherwise
            else {
                lesMsg({type:404,msg:'User or email already exists'});
                letPwd('');
            }
        }
        senddata();
    }
    return(
        <>
        <Navbar></Navbar>
        <div className="container">
                <div className="card o-hidden border-0 shadow-lg my-5">
                    <Msg classe="alert alert-danger" msg={msg}/>
                    <h1>Login</h1>
                        <div className="card-body p-0">
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <div className="p-5">
                                    <div className="text-center"></div>
                                    <form onSubmit={SubmitRegister} method="POST" class="user">
                                        <div class="form-group">
                                            <input 
                                            onChange={
                                                    (e) => letUser(e.target.value)
                                                }
                                            type="text"
                                            class="form-control form-control-user"
                                            value={user}
                                            id="exampleFirstName"
                                            placeholder="Username"/>
                                        </div>
                                        <div class="form-group">
                                            <input 
                                            onChange={
                                                    (e) => setEmail(e.target.value)
                                                }
                                            type="Email"
                                            class="form-control form-control-user"
                                            id="exampleFirstName"
                                            value={email}
                                            placeholder="Email"/>
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
                                    <Links  text="If you have account ,login" href='/login'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}