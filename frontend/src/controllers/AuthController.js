import token from "../models/AuthModel";
/*
Save JWT token inside variable
*/
export default class AuthController1{
  constructor() {
    if (AuthController1._instance) {
      return AuthController1._instance;
    }
    this.token = token;
    AuthController1._instance = this;
    // ... Your rest of the constructor code goes after this
  }
  setToken(jwt,refrech){
        this.token.setToken(jwt);
        this.token.setRefrech(refrech);
    }
    getToken(){
        let Token = token.getToken();
        return Token;
    }
    removeToken(){
        this.token.removeToken();
    }
}