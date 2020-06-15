import React, {Component} from "react";
import {GeneralTemplate} from "../../templates";
import { HomeContent } from "../../components/organisms";
import "./home.css";

class Home extends Component{
    constructor(){
        super();

        this.state={
            title:"TechJobs"
        }
    }

    render(){
        const {title} = this.state;
        return(
           <GeneralTemplate>
            <HomeContent title={title}/>
           </GeneralTemplate>
        )
    }
}

export default Home;