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
}
 
export default RegisterModel;