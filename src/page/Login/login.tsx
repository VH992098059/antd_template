import React from 'react';
import {Flex, FormProps} from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import "./login.scss"
type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const Login: React.FC = () => (
   <Flex gap={"middle"} vertical={true}>
       <Form
           name="basic"
           labelCol={{ span: 6 }}
           wrapperCol={{ span: 16 }}
           style={{ maxWidth: 600 }}
           initialValues={{ remember: true }}
           onFinish={onFinish}
           onFinishFailed={onFinishFailed}
           autoComplete="off"
           id={"Login"}
       >
           <p style={{textAlign:"center",fontSize:"30px",fontWeight:"bolder",color:"white"}}>校园活动</p>
           <Form.Item<FieldType>
               label="账号"
               name="username"
               rules={[{ required: true, message: '请输入账号！' }]}
           >
               <Input placeholder={"输入账号或手机号"}/>
           </Form.Item>

           <Form.Item<FieldType>
               label="密码"
               name="password"
               rules={[{ required: true, message: '请输入密码！' }]}
           >
               <Input.Password placeholder={"输入不少于8位密码"}/>
           </Form.Item>

           <Form.Item<FieldType> name="remember" valuePropName="checked" label={null}>
               <Checkbox>记住密码</Checkbox>
           </Form.Item>

           <Form.Item label={null}>
               <Button type="primary" htmlType="submit">
                   登录
               </Button>
           </Form.Item>

           <Form.Item label={null}>
               <a href={""}>
                   没有账号？点击注册！
               </a>
           </Form.Item>
       </Form>
   </Flex>
);

export default Login;
