import React from "react";
import { FormLogin } from "../../molecules";
import "./loginContent.css";

const LoginContent = ({onFinish}) => {
  return (
    <main className="loginContent--container">
      <h2>Acesse sua conta</h2>
      <FormLogin onFinish={onFinish}/>
    </main>
  );
};
export default LoginContent;
