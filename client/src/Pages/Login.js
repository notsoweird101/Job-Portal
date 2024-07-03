import React from "react";
import { Row, Col, Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/actions/userActions";
import Link from "antd/es/typography/Link";

function Login() {
    const dispatch=useDispatch();
    function login(values){
        dispatch(loginUser(values))
    }
    return (
        <div className="login-bg" style={{backgroundImage: "url('https://c1.wallpaperflare.com/preview/427/745/192/notebook-natural-laptop-macbook.jpg')", backgroundSize: 'cover' , height: '100vh'}}>
        <div className="login">
            <Row justify='center'  >

                <Col lg={10} sm={24} className="bs p-3" style={{backgroundColor: 'white' , borderRadius: '10px'}}>
                    <h3>Login</h3>
                    <hr/>

                    <Form layout="vertical" onFinish={login}>
                        <Form.Item label="username" name='username' rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>

                        <Form.Item label="password" name='password' rules={[{ required: true }]}>
                            <Input type="password" />
                        </Form.Item>

                        <Button htmlType="submit" className='mb-3'>Login</Button><br/>
                        <Link to='/register' className='mt-3'> Not Registered? Click Here to SignUp </Link>
                    </Form>
                </Col>
            </Row>
        </div>
        </div>
    )
}

export default Login
