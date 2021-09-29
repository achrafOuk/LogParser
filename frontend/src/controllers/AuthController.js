import AuthModel from "../models/AuthModel";
export default class AuthController{
    constructor(){
         this.token = new AuthModel();
    }
    setToken(jwt,refrech){
        this.token.setJWT(jwt);
        this.token.setRefrech(refrech);
    }
    getToken(){
        let token = new AuthModel().getJWT();
        console.log("token:"+token);
        return token;
    }
    removeToken(){
        this.token.removeToken();
    }
}