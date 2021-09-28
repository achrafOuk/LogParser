class LoginModel {
    constructor(username,pwd){
        this.username = username;
        this.pwd = pwd;
        this.title = "register page";
    }
    
    getData(){
        return {
            'username':this.username,
            'password':this.pwd,
        }
    }
    
    validateData(){
        let error=[]
        if(this.name==="" || this.pwd==="" )
        {
            error =[...error,'Fields must not be empty!'];
        }
        let response = {
            "content":error,
            "type":'danger'
        };
        return response;
    }
    sendData(){
        if(this.validateData().content.length===0){
            let _data = this.getData();
            let response;
            let senddata = async () =>{
                let req = await fetch('http://127.0.0.1:8000/api/login/',{
                    method: "POST",
                    body: JSON.stringify(_data),
                    headers: {"Content-type": "application/json; charset=UTF-8"}
                })
                .then(response => { return response.json() }).catch(err => { return (err)} ) ;
                if( typeof(req.refresh)==='undefined' 
                && typeof(req.detail)==='undefined' 
                && typeof(req.infos)==='undefined'){
                    req.content=req.content.replace(/{'/,"").replace(/'}/,"");
                    req.type='danger';
                    req.content =[req.content]
                    response = {
                        "content":req.content,
                        "type":req.type
                    };
                    return response;
                }
                else if(typeof(req.refresh)==='undefined' 
                && typeof(req.detail)==='undefined' ){
                    req.content=[req.info];
                    req.type='danger';
                    response = {
                        "content":req.content,
                        "type":req.type
                    };
                return response;
                }
                else if(typeof(req.info)==='undefined' ){
                    req.content=['you will redirect in instead'];
                    req.type='success';
                    response = {
                        "content":req.content,
                        "type":req.type
                    };
                return response;
                }
            }
       return  senddata();
        }
    }
}
export default LoginModel;