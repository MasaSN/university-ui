import React from 'react'
import { Form, Input, Button , message} from 'antd'
import { useState , } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/login';

function Login() {

const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleLogin = async (values) => {
  try {
    console.log(values);
    setLoading(true);

    const res = await login(values);
    console.log(res);
    localStorage.setItem('token', res.result);
    console.log("token", localStorage.getItem('token'));
    navigate('/students'); // Redirect to students page on successful login
    // You can add success message or redirect here if needed
  } catch (error) {
    message.error('Invalid username or password');
    console.error("errroorrr",error);
  } finally {
    setLoading(false);
  }
};

  
  
  return (
    <div>
     <Form name="login" onFinish={handleLogin} layout='vertical' style={{maxWidth: 400, margin: 'auto'}}>
       <Form.Item
         label="Email"
         name="email"
         rules={[{ required: true, message: 'Please enter your email!' }]}
       >
         <Input />
       </Form.Item>
       <Form.Item
         label="Password"
         name="password"
         rules={[{ required: true, message: 'Please enter your password!' }]}
       >
         <Input.Password />
       </Form.Item>
       <Form.Item>
         <Button type="primary" htmlType="submit">
           Login
         </Button>
       </Form.Item>
     </Form>
    </div>
  )
}

export default Login
