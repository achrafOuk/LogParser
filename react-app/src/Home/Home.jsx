import Navbar from '../Components/navbar/Navbar'
import Button from '../Components/shared/button';
//<Button click={()=>this.setState({redirect:true})} text="Start Now"/>
function Home(){
    return(
        <div>
        <Navbar/>
        <div style={{background: "#D6002F",
            padding: "10%",
            color:"white"}} class="position-relative aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
            <div class="row justify-content-center">
                    <div class="col-xl-7 col-lg-9 text-center">
                        <h1>Log Parser</h1>
                        <h2>Log Parser is a website to parse log</h2>
                        <Button 
                                text="submit" 
                        style={{background:'#1d1d1d'}}/>
                    </div>
                </div>
        </div>

        </div>
    )
}
export default Home;