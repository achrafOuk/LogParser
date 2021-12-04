import { useEffect } from "react";
import { Redirect, useHistory } from "react-router";
import { useSelector } from "react-redux";
import api from "../App/connectAPI";
export const Logout = () => {
    const history = useHistory();
    history.push('/');
    const jwtToken = useSelector( state =>state.login.jwt );
    const refresh = {
        'refresh':'Bearer '+ String(jwtToken)
    }
    useEffect(()=>{
        let senddata = async () =>{
            let req = await api.post('/api/logout/',refresh)
            .then(response => {  return response })
            .catch(err =>  {return err} );
            console.log(req.data);
            return req;
        }
        senddata();
        //dispatch(LogoutAction());
        //reduxRemove();
    })
    return( <Redirect to='/home'/>)
}