export function Input(props){
        return(
            <>
                <input onChange={props.onWrite } 
                type={props.input.type} className="form-control form-control-user" id={props.input.id}
                    placeholder={props.input.placeholder}/>
            </>
        );
}