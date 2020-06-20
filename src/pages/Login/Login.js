import React, { Component } from "react";
import {withRouter} from "react-router-dom";
import { GeneralTemplate } from "../../templates";
import { LoginContent } from "../../components/organisms";
import "./login.css";

class Login extends Component {
  constructor() {
    super();

    this.state = {}
  }

 onFinish = async values => {
    const {login} = this.props;
    await login();
    console.log('Dados recebidos no formLogin: ', values);
    this.props.history.push("/");
  };

  render(){
    const{loggedUser, logout} = this.props;
    return (
      <GeneralTemplate loggedUser={loggedUser} logout={logout}>
        <LoginContent onFinish={this.onFinish}/>
      </GeneralTemplate>
    );
  }
}

export default withRouter(Login);
