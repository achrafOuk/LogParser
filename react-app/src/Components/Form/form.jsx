import { Link } from "react-router-dom";
import Button from "../shared/button";
import { InputGroup } from "./InputGroup";
//<Link  text={props.submit} href={props.href}/>
export function Form(props){
    return(
        <div className="container">
        <div className="card o-hidden border-0 shadow-lg my-5">
        <h1>{props.pageName}</h1>
            <div className="card-body p-0">
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="p-5">
                            <div className="text-center">
                            </div>
                            <form className="user">
                                {
                                props.inputs.map( 
                                input => <InputGroup key={props.input} 
                                onWrite={ ()=> this.updateMsg( props.onEdit() ) } 
                                inputs={input} />)}
                                <Button 
                                text="submit" 
                                class="btn btn-primary btn-user btn-block" 
                                style={{background:'#d6002f'}}/>
                            </form>
                            <hr/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}