export default function Msg(props){
    if(props.msg){
        const DANGER ="alert alert-danger";
        const SUCCESS ="alert alert-success";
        let classe = props.msg.type===200 ? SUCCESS : DANGER;
        return (
                <div className={classe} role="alert" style={props.style}>
                    {props.msg.msg}
                </div>
            )
        }
    return(
        <div >
        </div>
    );
}