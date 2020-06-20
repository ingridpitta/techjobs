import React, { Component } from "react";
import { GeneralTemplate } from "../../templates";
import { SignUpContent } from "../../components/organisms";
import "./signUp.css";

class SignUp extends Component {
  constructor() {
    super();

    this.state = {}
  }

  onFinish = values => {
    console.log('Dados recebidos no formSignUp: ', values);
  };

  render(){
    return (
      <GeneralTemplate>
        <SignUpContent onFinish={this.onFinish}/>
      </GeneralTemplate>
    );
  }
}

export default SignUp;
