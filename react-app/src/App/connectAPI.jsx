import axios from "axios";
import jwt_decode from "jwt-decode";
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
api.interceptors.request.use( async req =>{
    let jwtToken = getJWT()?.jwt;
    console.log('yo');
    if(jwtToken != null){
        let decodeJwt = jwt_decode(jwtToken);
        console.log('jwt:',decodeJwt);
        req.headers.Authorization = `Bearer ${jwtToken}`
    }
    return req;
});
export default api;