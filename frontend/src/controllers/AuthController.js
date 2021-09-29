import AuthModel from "../models/AuthModel";
export default class AuthController{
    constructor(){
        let token = new AuthModel();
    }
    setToken(jwt){
    let token = new AuthModel();
    token.setJWT(jwt);
    }
    getToken(){
        return new AuthModel().getJWT();
    }
    removeToken(){
    let token = new AuthModel();
    token.removeToken();
    }
}