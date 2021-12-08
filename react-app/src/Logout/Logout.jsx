import { useEffect } from "react";
import { Redirect, useHistory } from "react-router";
import api from "../App/connectAPI";
import { useDispatch } from "react-redux";
import { LogoutAction } from "../Login/LoginActions";
import { useSelector } from "react-redux";
export const Logout = (props) => {
    const history = useHistory();
    history.push('/');
    const dispatch = useDispatch();
    let senddata = async () =>{
        let req = await api.post('/api/logout/')
        .then(response => {  return response })
        .catch(err =>  {return err} );
        console.log(req.data);
        return req;
    }
    senddata();
    dispatch(LogoutAction());
    localStorage.removeItem('state');
    //reduxRemove();
    const jwt = useSelector(state => state.login.jwt);
    console.log('jwt:',jwt);
    props.history.push('/login');
    return( <Redirect to='/login'/>)
}