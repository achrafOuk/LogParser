import RegisterModel from "../models/registerModel";
class RegisterController {
    validateEmail(email){
            const pattern = /^[a-z0-9]+[(_|.)a-z0-9]*@[a-z]+.[a-z]+$/;
            let result = new RegExp(pattern).test(email);
            return result;
        }
    validatePassword(pwd,repwd){
        return pwd===repwd ? true :false;
    }
    validateData(data){
        let error=[]
        if(data.name==="" || data.email==="" || data.pwd==="" || data.repwd==="" )
        {
            error =[...error,'Fields must not be empty!'];
        }
        if(! this.validateEmail(data.email) ){
            error =[...error,'The email is not valide'];
        }
        if( ! this.validatePassword(data.pwd,data.repwd) )
        {
            error =[...error,'The passwords does not match'];
        }
        return error;
    }
    collectData(){
        let inputs = document.querySelectorAll('input');
        const that = this;
        if (inputs.length===4){
            let name = (inputs[0].value);
            let  email= (inputs[1].value);
            let pwd = (inputs[2].value);
            let repwd = (inputs[3].value);
            let  data = new RegisterModel(name,email,pwd,repwd);
            return data.validateData(data);
        }
    }
    sendData(e){
        e.preventDefault();
        let inputs = document.querySelectorAll('input');
        if (inputs.length===4){
            let name = (inputs[0].value);
            let  email= (inputs[1].value);
            let pwd = (inputs[2].value);
            let repwd = (inputs[3].value);
            let  data = new RegisterModel(name,email,pwd,repwd);
            console.log('Data is passed');
            return ''
        }
    }
    
}
export default RegisterController ;