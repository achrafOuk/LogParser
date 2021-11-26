// login hooks
import { loginAction } from "./LoginActions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
/*Create login */
export function useLogin(user,pwd){
    /*State dispatcher*/
    let dispatch = useDispatch();
    //get state token
    let jwtToken = useSelector( (state) => state);
    // get login data
    let userInfo={
            'username':user,
            'password':pwd
    };
    // get login data
    const options = {
            method: 'POST',
            body: JSON.stringify(userInfo),
            headers: {"Content-type": "application/json; charset=UTF-8"}
    };
    //send login request
    let senddata = async () =>{
            let req = await fetch('http://127.0.0.1:8000/api/login/',options)
            .then(response => { return response.json() }).catch(err => { return (err)} ) ;
            if(typeof(req.detail)!=="undefined" )
            {
            }
            else{
                dispatch(loginAction(user,req.access,req.refresh));
            }
    }
}