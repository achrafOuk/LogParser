export default class AuthModel{
    constructor(){
        this.token;
        if( AuthModel.instance instanceof AuthModel){
            	return AuthModel.instance;
            }
            Object.freeze(this);
            AuthModel.instance = this;
    }
    setJWT(jst){
        this.token = jwt;
    }
    getJWT(){
        return this.token;
    }
    removeToken(){
        token = this.token;
        if(typeof(token)==="undefined") return token;
        return 'undefined';
    }
}