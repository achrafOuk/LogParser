class AuthModel1{
    constructor(){
        if (AuthModel1._instance) {
        return AuthModel1._instance;
        }
        this.token=undefined;
        this.refrech=undefined;
        AuthModel1._instance = this;
    }
    getToken()
    {
        return this.token;
    }
    setToken(token){
        this.token = token;
    }
    setRefrech(refrech){

        this.refrech = refrech;
    }
    getRefrech(){
        return this.refrech;
    }
    removeToken(){
        let token = this.token;
        if(typeof(token)==="undefined") return token;
        return undefined;
    }
}
let token = new AuthModel1();
export default token;