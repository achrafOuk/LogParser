export function InputGroup(props){
        return(
        <div class="form-group">
           { props.inputs.map( input=> <Input  onWrite={props.onWrite} key={input.id} input={input}  />) }
        </div>
        )
}