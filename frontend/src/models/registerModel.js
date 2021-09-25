class RegisterModel {
    constructor(username,email,pwd,repwd){
        this.username = username;
        this.email = email;
        this.pwd = pwd;
        this.repwd = repwd;
        this.title = "register page";
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
            'username':this.username,
            'email':this.email,
            'password':this.pwd,
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
        let response = {
            "content":error,
            "type":'danger'
        }
        console.log(response);
        return response;
    }
    sendData(){
        if(this.validateData().content.length===0){
            let _data = this.getData();
            console.log('data send');
            let senddata = async () =>{
                let req = await fetch('http://127.0.0.1:8000/api/signup/',{
                    method: "POST",
                    body: JSON.stringify(_data),
                    headers: {"Content-type": "application/json; charset=UTF-8"}
                })
                .then(response => { return response.json() }).catch(err => { return (err)} ) ;
                try{
                    console.log('req1'+req);
                    req.content=req.content.replace(/{'/,"").replace(/'}/,"");
                    req.type='danger';
                    req.content =[req.content]
                    console.log(Object.values(req));
                    return Object.values(req);
                }
                catch(error){
                    req.content=[req.info];
                    req.type='success';
                    console.log('req0'+req);
                    console.log(Object.values(req));
                    return Object.values(req);
                }
            }
            console.log('data1');
            return senddata();

        }
    }
}
export default RegisterModel;