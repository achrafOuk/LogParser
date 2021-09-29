import AuthModel from "../models/AuthModel";
export default class AuthController{
    constructor(){
         this.token = new AuthModel();
    }
    setToken(jwt,refrech){
        this.token.setJWT(jwt);
        this.token.setRefrech(jwt);
    }
    getToken(){
        return new AuthModel().getJWT();
    }
    removeToken(){
        this.token.removeToken();
    }
}