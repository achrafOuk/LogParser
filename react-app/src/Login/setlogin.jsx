import api from "../App/connectAPI";
export const setlogin = (user,pwd) =>{
        let userInfo={
            'username':user,
            'password':pwd
        };
        let senddata = async () =>{
            let req = await api.post('/api/login/', userInfo )
            .then(response => { return response })
            .catch(err => { return (err)} ) ;
            // check if user enter valid data
            return (req);
        }
        return senddata();
}