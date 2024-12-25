import React from "react";
import {Button, Flex, Form, type FormProps, Input, Space} from "antd";
import "./register.scss"
type FieldType = {
    username?: string;
    password?: string;
    samePassword?: string;
    phone?: string;
    remember?: string;
    verification?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
const Register: React.FC = () => (
    <Flex gap={"middle"} vertical={true} justify={"center"} style={{height:'100vh',padding:"0"}}>
        <Flex gap="middle" justify={"center"} >
            <Form
                name="basic"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                id={"register"}
            >
                <p style={{textAlign:"center",fontSize:"30px",fontWeight:"bolder",color:"white"}}>注册用户</p>
                <Form.Item<FieldType>
                    label="账号"
                    name="username"
                    rules={[{ required: true, message: '请输入账号！' }]}
                >
                    <Input placeholder={"请输入账号"}/>
                </Form.Item>

                <Form.Item<FieldType>
                    label="密码"
                    name="password"
                    rules={[{ required: true, message: '请输入密码！' }]}
                >
                    <Input.Password placeholder={"输入不少于8位密码"}/>
                </Form.Item>
                <Form.Item<FieldType>
                    label="确认密码"
                    name="samePassword"
                    rules={[{ required: true, message: '密码不匹配！' }]}
                >
                    <Input.Password placeholder={"请再次输入密码"}/>
                </Form.Item>
                <Form.Item<FieldType>
                    label="手机号"
                    name={"phone"}
                    rules={[{ required: true, message: '请输入手机号！' }]}

                >
                    <Input name={"phone"} placeholder={"请输入手机号"}/>

                </Form.Item>
                <Form.Item<FieldType>
                    label="验证码"
                    name="verification"
                    rules={[{ required: true, message: '请输入验证码！' }]}
                >
                    <Space>
                        <Input placeholder={"请输入验证码"}/>

                        <Button type="primary">
                            获取验证码
                        </Button>
                    </Space>
                </Form.Item>
                <Form.Item label={null}>
                    <Space>
                        <Button type="primary" htmlType="submit">
                            注册
                        </Button>

                        <Button type="primary" danger>
                            返回
                        </Button>
                    </Space>
                </Form.Item>

            </Form>
        </Flex>
    </Flex>
);

export default Register;
