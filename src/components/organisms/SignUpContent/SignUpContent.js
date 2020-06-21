import React from "react";
import { FormSignUp } from "../../molecules";
import "./signUpContent.css";

const SignUpContent = ({onFinish}) => {
  return (
    <main className="signUpContent--container">
    <h2>Crie uma conta</h2>
     <FormSignUp onFinish={onFinish}/>
    </main>
  );
};
export default SignUpContent;
