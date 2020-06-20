import React, { Component } from "react";
import {withRouter} from "react-router-dom";
import { GeneralTemplate } from "../../templates";
import { SignUpContent } from "../../components/organisms";
import "./signUp.css";

class SignUp extends Component {
  constructor() {
    super();

    this.state = {}
  }

  onFinish = async values => {
    const {login} = this.props;
    await login();
    console.log('Dados recebidos no formSignUp: ', values);
    this.props.history.push("/");
  };

  render(){
    const {loggedUser, logout} = this.props;
    return (
      <GeneralTemplate loggedUser={loggedUser} logout={logout} >
        <SignUpContent onFinish={this.onFinish}/>
      </GeneralTemplate>
    );
  }
}

export default withRouter(SignUp);
