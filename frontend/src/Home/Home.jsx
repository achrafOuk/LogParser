import Navbar from '../Components/navbar/Navbar'
import Button from '../Components/shared/button';
import { useState } from 'react';
import Cart from '../Components/Home/cart';
function Home(props){
    return(
        <>
        <div>
        <Navbar/>
        <div style={{background: "#D6002F",
            padding: "10%",
            color:"white"}} class="position-relative aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
            <div class="row justify-content-center">
                    <div class="col-xl-7 col-lg-9 text-center">
                        <h1>Log Parser</h1>
                        <h2>Log Parser is a website to parse logs more beatufly</h2>
                        <Button 
                        click ={()=>props.history.push('/register')}
                        text="Start now" 
                        style={{background:'#1d1d1d',background: "#f8f9fa !important",border: "none"}}/>
                    </div>
            </div>
            </div>
        </div>
    <section id="services" class="services section-bg" style={{padding:'3%',background:'#1d1d1d',color:'#fff'}}>
      <div class="container">
        <div class="section-title">
          <h2>Why using LogParser</h2>
        </div>
        <div class="row d-flex justify-content-center">
        <Cart title='Free to use' desc="Log parser is a free service to use"/>
        <Cart title='Make reading logs more fun' 
        desc="Log parser show the log of files in nice and organized way"/>
        </div>
        </div>
    </section>
    </>
    )
}
export default Home;