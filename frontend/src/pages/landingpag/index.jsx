import { Component } from "react";
import Button from "../../components/form/button";
import IndexController from "../../controllers/IndexController";
import { Redirect } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
class Index extends Component {
    constructor(){
        super();
        this.state={
            redirect:false
        }
    }
    render() { 
        if(this.state.redirect)
        {
            return <Redirect to="/register"/>
        }
        return (
        <>
            <Navbar/>
            <div style={{background: "#D6002F",
            padding: "10%",
            color:"white"}} class="position-relative aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
            <div class="row justify-content-center">
                    <div class="col-xl-7 col-lg-9 text-center">
                        <h1>Log Parser</h1>
                        <h2>Log Parser is a website to parse log</h2>
                        <Button click={()=>this.setState({redirect:true})} text="Start Now"/>
                    </div>
                </div>
            </div>
        </>
        );
    }
}
export default Index ;