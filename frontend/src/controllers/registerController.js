import RegisterModel from "../models/registerModel";
class RegisterController {
    collectData(){
    let inputs = document.querySelectorAll('input');
    console.log('form:'+inputs.length);
    if (inputs.length===4){
        let name = (inputs[0].value);
        let  email= (inputs[1].value);
        let pwd = (inputs[2].value);
        let repwd = (inputs[3].value);
        let  data = new RegisterModel(name,email,pwd,repwd);
        console.log(data.validateData());
        return data.validateData()
    }
    }
    
}
export default RegisterController ;