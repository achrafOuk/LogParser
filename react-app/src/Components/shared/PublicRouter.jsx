import { Redirect, Route } from "react-router";
import { useSelector } from 'react-redux';
import React from "react";
export default function PublicRouter({children,...rest}){
    let jwtToken = useSelector( (state) => state.login.jwt );
    console.log(jwtToken);
    return (
        <Route {...rest} render={()=>{
            return !jwtToken ? children : <Redirect to='/home' />
        }}/>
    )
}