import React, {Component} from "react";
import {GeneralTemplate} from "../../templates";
import { HomeContent } from "../../components/organisms";
import "./home.css";

class Home extends Component{
    constructor(){
        super();

        this.state={}
    }

    render(){
        return(
           <GeneralTemplate>
            <HomeContent/>
           </GeneralTemplate>
        )
    }
}

export default Home;