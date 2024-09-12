export default function Button(props){
    return (
            <>
            <button 
            onClick={props.click}
            onSubmit={props.submit}
            type={props.type} 
            ref={props.forwardRef}
            className={props.class} 
            style={props.style}>{props.text}</button>
            </>
        );
}