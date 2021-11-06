import { Form } from "../Components/Form/form";
import Navbar from "../Components/navbar/Navbar";
import { onWrite } from "./LoginController";

export default function Login(){
        let username=[{
            "id":1,
            "placeholder":"Username",
            "id":"exampleFirstName",
            "type":"text"
        }];
        
        let passwords=[{
            "id":3,
            "placeholder":"Password",
            "id":"password",
            "type":"password"
        }];
        let inputs =[username,passwords];
        //let login = new LoginController();

        return(
            <>
            <Navbar />
            <Form pageName='Login' 
            inputs={inputs} 
            submit="Don't have an account? signin!" href='/register'/>
            </>
        );
    }