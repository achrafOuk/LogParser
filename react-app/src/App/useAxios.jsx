import { useDispatch } from "react-redux";
import { RefrechAction } from "../Login/LoginActions";
import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from 'dayjs';
/** 
 * Refresh jwt token
 * */ 
function getJWT(){
    let jwtToken = localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')).login :null;
    return jwtToken;

}
export default function useAxios(){
    // get jwt token from local storage
    let dispatch = useDispatch();
    let jwtToken = getJWT()?.jwt;
    let api ;
    if( jwtToken == null ){
    api = axios.create( { baseURL:'http://localhost:8000' });
    }
    else{
        api = axios.create( { 
            baseURL:'http://localhost:8000', 
            headers:{ Authorization: `Bearer ${jwtToken}`}
        });
    }
    api.interceptors.request.use( async req =>{
    let jwtToken = getJWT()?.jwt;
    if(jwtToken != null){
        //decode the jwt 
        let decodeJwt = jwt_decode(jwtToken);
        // add jwt to request method
        req.headers.Authorization = `Bearer ${jwtToken}`
        // check if jwt is expired
        const isExpired = dayjs.unix(decodeJwt.exp).diff(dayjs()) < 1;
        // return the request without refreshing the jwt token
        if(!isExpired) return req;
        // refresh the request JWT token
        const refrech_token = await axios.post('http://localhost:8000/api/login/refrech/',
            {refresh:getJWT()?.refresh}
        );
        //set the new jwt token
        console.log(localStorage.getItem('state'));
        console.log(typeof(localStorage.getItem('state')));
        let getTokens = JSON.parse(localStorage.getItem('state')).login;
        getTokens.jwt =  refrech_token.data;
        localStorage.setItem( 'state', JSON.stringify(refrech_token) );
        dispatch(RefrechAction(refrech_token.data));
    }
    return req;
    });
    return api;
}