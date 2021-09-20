class RegisterController {
    validateEmail(email){
        let result = new RegExp("^[\w+][.\w+]*@[\w+][.\w+]+$").text(email);
        return result;
    }
    validatePassword(pwd,repwd){
        return pwd===repwd ? true :false;
    }
    sendData(username,email,pwd,repwd){
        if(this.validateEmail(email) && this.validatePassword(pwd,repwd)){
        }
    }
}
export default RegisterController ;