export default function Button(props){
    return (
            <>
            <button 
            onClick={props.click}
            type={props.type} 
            className={props.class} style={props.style}>{props.text}</button>
            </>
        );
}