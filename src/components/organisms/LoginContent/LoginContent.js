import React from "react";
import { MainTitle } from "../../atoms";
import { FormLogin } from "../../molecules";
import "./loginContent.css";

const LoginContent = ({onFinish}) => {
  return (
    <main className="loginContent--container">
      <FormLogin onFinish={onFinish}/>
    </main>
  );
};
export default LoginContent;
