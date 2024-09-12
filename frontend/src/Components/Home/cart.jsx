export default function Cart(props){
    let style = {
    backgroundColor:'#fefefe',
    margin:'3%' ,
    color : '#1d1d1d',
    }
    return (
        <div class="col-lg-4 col-md-6 cart" style={style}>
            <div class="icon-box">
              <div class="icon"><i class="bi bi-cash-stack" style={{color: "#ff689b"}}></i></div>
              <h4 class="title">{props.title}</h4>
              <p class="description">{props.desc}</p>
            </div>
          </div>
    )
}