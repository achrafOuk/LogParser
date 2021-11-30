export default function Msg(props){
    if(props.msg){
        return (
                <div className={props.classe} className="alert alert-danger" role="alert">
                    {props.msg}
                </div>
            )
        }
    return(
        <div >
        </div>

    );
}