import { Redirect, Route } from "react-router";
import { useSelector } from 'react-redux';
export default function PublicRouter({children,...rest}){
    let jwtToken = useSelector( (state) => state.login.jwt);
    return (
        <Route {...rest} render={()=>{
            return !jwtToken ? children: <Redirect to='/home' />
        }}/>
    )
}