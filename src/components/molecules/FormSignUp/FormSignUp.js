import React from "react";
import {Link} from "react-router-dom";
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const FormSignUp = ({onFinish}) => {

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
    <Form.Item
        name="name"
        rules={[
          {
            required: true,
            message: 'Campo obrigatório. Por favor, insira seu nome',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Nome" />
      </Form.Item>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Campo obrigatório. Por favor, insira seu nome de usuário',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Usuário" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Campo obrigatório. Por favor, insira sua senha',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Senha"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Cadastrar
        </Button>
        Or <Link to="/login">Login</Link>
      </Form.Item>
    </Form>
  );
};

export default FormSignUp;