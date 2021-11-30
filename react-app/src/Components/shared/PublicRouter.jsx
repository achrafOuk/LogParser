import { Redirect, Route } from "react-router";
import { useSelector } from 'react-redux';
import React from "react";
export default function PublicRouter({children,...rest}){
    let jwtToken = useSelector( (state) => state.login.jwt );
    return (
            !jwtToken ? <Route component={rest.component} {...rest.computedMatch} />
            : <Redirect to='/home' />
    )
}