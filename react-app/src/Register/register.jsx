import Navbar from '../Components/navbar/Navbar'
import { Form } from "../Components/Form/form";
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router'
export function Register(){
    let username=[{
            "key":1,
            "placeholder":"Username",
            "id":"exampleFirstName",
            "type":"text"
        }];
        let email=[{
            "key":2,
            "placeholder":"Email",
            "id":"exampleEmail",
            "type":"email"
        }];
        let passwords=[{
            "key":3,
            "placeholder":"Password",
            "id":"password",
            "type":"password"
        },
        {
            "key":4,
            "placeholder":"Repeat Password",
            "id":"Repeatedpassword",
            "type":"password"
        }
    ];
    let inputs = [username,email,passwords]
    let user = useSelector(state => state.login.user);
    if( user ){
        return <Redirect to='/home'/>;
    }
    return(
        <>
        <Navbar></Navbar>
        <Form key='1' pageName='Regsiter' 
            inputs={inputs} submit="If have an account, signin!" href='/login'/>
        </>
    )
}