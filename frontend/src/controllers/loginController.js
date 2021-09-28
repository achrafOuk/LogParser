import LoginModel from "../models/loginModel";

export default class LoginController {
    constructor(){
        this.title = 'LogParser - Login';
        document.querySelector('title').innerText= this.title;
    }
    collectData(){
        let inputs = document.querySelectorAll('input');
        if (inputs.length===2){
            let name = (inputs[0].value);
            let pwd = (inputs[1].value);
            let  data = new LoginModel(name,pwd);
            return data.validateData(data);
        }
    }
    sendData(e){
        e.preventDefault();
        let inputs = document.querySelectorAll('input');
        if (inputs.length===2){
            let name = (inputs[0].value);
            let pwd = (inputs[1].value);
            let  data = new LoginModel(name,pwd);
            return data.sendData();
        }
    }
}