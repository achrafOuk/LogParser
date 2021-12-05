import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from 'dayjs';
function getJWT(){
    let jwtToken = localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')).login :null;
    return jwtToken;
}
// get jwt token from local storage
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
// refresh the jwt token
api.interceptors.request.use( async req =>{
    let jwtToken = getJWT()?.jwt;
    console.log('refresh token activated');
    if(jwtToken != null){
        //decode the jwt 
        let decodeJwt = jwt_decode(jwtToken);
        // add jwt to request method
        req.headers.Authorization = `Bearer ${jwtToken}`
        // check if jwt is expired
        const isExpired = dayjs.unix(decodeJwt.exp).diff(dayjs()) < 1;
        // return the request without refreshing the jwt token
        //if(!isExpired) return req;
        // refresh the request JWT token
        const refrech_token = await axios.post('http://localhost:8000/api/login/refrech/',
            {refresh:getJWT()?.refresh}
        );
        //set the new jwt token
        
        console.log('refresh token:',jwtToken);
        console.log('refresh token:',refrech_token.data)

        let getTokens = JSON.parse(localStorage.getItem('state')).login;
        getTokens.jwt =  refrech_token.data;
        localStorage.setItem( 'state', JSON.stringify(refrech_token) );
    }
    return req;
});
export default api;