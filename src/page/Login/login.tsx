import React from 'react';
import {FormProps} from 'antd';
import { Button, Form, Input } from 'antd';
import  "./login.scss"
import {Link} from "react-router-dom";
type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
};



const Login: React.FC = () => (
    <div className={"loginBackground"}>
        <div className={"login"}>
            <div className={"title"}>用户登录</div>
            <div className={"subTitle"}>User Login</div>
            <Form name='basic' className={"loginForm"} initialValues={{ remember: true }} onFinish={onFinish}>
                <Form.Item name='username' rules={[{ required: true, message: '请输入账号！' }]}>
                    <Input placeholder='账号' size='large' />
                </Form.Item>

                <Form.Item name='password' rules={[{ required: true, message: '请输入密码！' }]}>
                    <Input.Password placeholder='密码' autoComplete='new-password' size='large' />
                </Form.Item>

                <Form.Item>
                    <Button
                        className={"loginSubmit"}
                        size='large'
                        type='primary'
                        block
                        htmlType='submit'
                    >
                        登录
                    </Button>
                </Form.Item>
                <Form.Item style={{textAlign:'center'   }}>
                    <Link to='/userLayout/register'>没有账号，点击注册！</Link>
                </Form.Item>
            </Form>
        </div>
    </div>
);

export default Login;
