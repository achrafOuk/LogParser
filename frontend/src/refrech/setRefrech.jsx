import { useSelector } from "react-redux";
/***
 * Refrech JWT token
 */
export function SetRefrech(){
    const refrech_acess = useSelector(state=> state.login.refresh);
    const options = {
            method: 'POST',
            body: {'refresh':refrech_acess},
            headers: {"Content-type": "application/json; charset=UTF-8"}
        };
        let senddata = async () =>{
            let req = await fetch('http://127.0.0.1:8000/api/login/refrech/',options)
            .then(response => { return response.json() }).catch(err => { return (err)} ) ;
            //dispatch(loginAction(user,req.access,req.refresh));
            console.log(req);
    }
    senddata();
}