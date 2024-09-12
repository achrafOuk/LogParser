import { useState } from "react";
import Button from "./button";
export default function Msg(props){
    let [show,setShow] = useState(true)
    let hideMsg = () =>{
        setShow(!show);
    }
    if(props.msg && show===true){
        console.log('render:',show);
        const DANGER ="alert alert-danger";
        const SUCCESS ="alert alert-success";
        let classe = props.msg.type===200 ? SUCCESS : DANGER;
        return (
                <div className={`${classe} alert-dismissible fade show`} role="alert" style={props.style}>
                    {props.msg.msg}
                <Button text='&times;' class="close" click={hideMsg} />

                </div>
            )
    }
    return(
        <div >
        </div>
    );
}