import { Redirect, Route } from "react-router";
import { useSelector } from 'react-redux';
export default function AuthRouter({children,...rest}){
    let jwtToken = useSelector( (state) => state.login.jwt);
    return (
        <Route {...rest} render={()=>{
            return jwtToken ? children: <Redirect to='/login' />
        }}/>
    )
}