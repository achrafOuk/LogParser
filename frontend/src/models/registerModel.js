class RegisterModel {
    constructor(username,email,pwd,repwd){
        this.username = username;
        this.email = email;
        this.pwd = pwd;
        this.repwd = repwd;
    }
    getUsername()
    {
        return this.username;
    }
    getEmail()
    {
        return this.email;
    }
    getPwd()
    {
        return this.pwd;
    }
    getRepwd()
    {
        return this.repwd;
    }
    getData(){
        return {
            'name':this.username,
            'email':this.email,
            'pwd':this.pwd,
            'repwd':this.repwd,
        }
    }
    validateEmail(email){
        const pattern = /^[a-z0-9]+[(_|.)a-z0-9]*@[a-z]+.[a-z]+$/;
        let result = new RegExp(pattern).test(email);
        return result;
    }
    validatePassword(pwd,repwd){
        return pwd===repwd ? true :false;
    }
    validateData(){
        let error=[]
        if(this.name==="" || this.email==="" || this.pwd==="" || this.repwd==="" )
        {
            error =[...error,'Fields must not be empty!'];
        }
        if(! this.validateEmail(this.email) ){
            error =[...error,'The email is not valide'];
        }
        if( ! this.validatePassword(this.pwd,this.repwd) )
        {
            error =[...error,'The passwords does not match'];
        }
        return error;
    }
}
export default RegisterModel;