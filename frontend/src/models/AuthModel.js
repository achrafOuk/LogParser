export default class AuthModel{
    constructor(){
        this.token = undefined;
        this.refrech = undefined;
    }
    setJWT(jwt){
        this.token = jwt;
    }
    setRefrech(refrech){

        this.refrech = refrech;
    }
    getJWT(){
        return this.token;
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