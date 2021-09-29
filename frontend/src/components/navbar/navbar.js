import { Component } from "react"
import Links from "./links"
export default class Navbar extends Component{
    render(){
        console.log("token:"+(this.props.token)) ;
        if(typeof(this.props.token)==='undefined'){
            return(
            <nav style={{ width:'100%' }} class="navbar navbar-light bg-light justify-content-between">
                    <Links href='/' text='Log Parser' />
                    <div class="form-inline">
                    <Links href='/logout' text='logout' />
                    </div>
            </nav>
            )
        }
        return(
        <nav style={{ width:'100%' }} class="navbar navbar-light bg-light justify-content-between">
        <Links href='/' text='Log Parser' />
        <div class="form-inline">
        <Links href='/login' text='Login' />
        <Links href='/register' text='Register' />
        </div>
        </nav>
        )
    } 
}