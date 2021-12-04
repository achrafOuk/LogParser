import { useEffect } from "react";
import { Redirect, useHistory } from "react-router";
export function Logout(){
    const history = useHistory();
    history.push('/');
    useEffect(()=>{
        const options = {
            method: 'POST',
        };
        let senddata = async () =>{
            let req = await fetch('http://127.0.0.1:8000/api/logout/',options)
            .then(response => { console.log(response); return response.json() })
            .catch(err =>  console.log('logout',err));
            console.log(req);
            return req;
        }
        let response = senddata();
        //dispatch(LogoutAction());
        //reduxRemove();
    })
    return( <Redirect to='/'/>)
}