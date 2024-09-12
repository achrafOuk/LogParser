import { Redirect, Route } from "react-router";
import { useSelector } from 'react-redux';
export default function AuthRouter({...rest}){
    let jwtToken = useSelector( (state) => state.login.jwt);
    const path = rest.computedMatch.path;
    return (
            jwtToken ? <Route component={rest.component} {...rest.computedMatch} />
            : <Redirect to='/login' />
    )
}
