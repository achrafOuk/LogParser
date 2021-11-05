import { Link } from 'react-router-dom';
import Navbar from '../Components/navbar/Navbar'
import Button from '../Components/shared/button';
import { Redirect } from "react-router-dom";
import { useState } from 'react';
import { useSelector } from 'react-redux';
function redirect(){
}
function Home(){
    let [isDirected,setDirect] = useState(false);
    let isLoged = useSelector(state=>state.login);
    if(isDirected){
        return <Redirect to="/register"/>;
    }
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
                        click ={()=>setDirect(true)}
                        text="Start now" 
                        style={{background:'#1d1d1d',background: "#f8f9fa !important",border: "none"}}/>
                    </div>
                </div>
        </div>
        </div>
    )
}
export default Home;