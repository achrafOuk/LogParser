function Footer(){
    let style = {
    backgroundColor:'#fefefe',
    margin:'3%' ,
    color : '#1d1d1d',
    maxHeight: "50px" ,
    marginButtom: "0%",
    height: "25px",
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%",
    textAlign: "center",
    marginTop:"5%"
    }
    return(
        <footer className="container-fluid p-2 p-md-5" style={style}>
            Created by <strong>Achraf Oukouhou</strong>
        </footer>
    )
}
export default Footer;