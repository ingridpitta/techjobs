import React, { Component } from "react";
import { GeneralTemplate } from "../../templates";
import { LoginContent } from "../../components/organisms";
import "./login.css";

class Login extends Component {
  constructor() {
    super();

    this.state = {}
  }

 onFinish = values => {
    console.log('Dados recebidos no formLogin: ', values);
  };

  render(){
    return (
      <GeneralTemplate>
        <LoginContent onFinish={this.onFinish}/>
      </GeneralTemplate>
    );
  }
}

export default Login;
