import React, { useState} from "react";
import {Button, Form, type FormProps, Input, Space} from "antd";
import "./register.scss"
import {Link} from "react-router-dom";
import {GetCode} from "../../api/user/registerApi/getCode.tsx";

type FieldType = {
    nickname: string,
    username?: string;
    password?: string;
    phone?: string;
    verification?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {

    console.log('Success:', values);
};

const Register: React.FC = () =>{
    const [phone, setPhone] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
    };

    const handleButtonClick = () => {
        GetCode(phone)
    };
    return (
        <div className={"registerBackground"}>

            <div className={"register"}>
                <Link to={"/userLayout/login"}><Button className={"loginReturn"} type={"primary"}
                                                       danger>返回</Button></Link>
                <div className={"title"}>用户注册</div>
                <div className={"subTitle"}>User Register</div>
                <Form name='basic' className={"registerForm"} initialValues={{remember: true}} onFinish={onFinish}>
                    <Form.Item<FieldType> name='nickname' rules={[{required: true, message: '请输入昵称！'}]}>
                        <Input placeholder='昵称' size='large'/>
                    </Form.Item>
                    <Form.Item<FieldType> name='username' rules={[{required: true, message: '请输入账号！'}]}>
                        <Input placeholder='账号' size='large'/>
                    </Form.Item>

                    <Form.Item<FieldType> name='password' rules={[{required: true, message: '请输入密码！'}]}>
                        <Input.Password placeholder='密码' autoComplete='new-password' size='large'/>
                    </Form.Item>
                    <Form.Item

                        rules={[{required: true, message: '密码不匹配！'}]}
                    >
                        <Input.Password name='samePassword' placeholder={"请再次输入密码"} size='large'/>
                    </Form.Item>
                    {/*TODO 手机正则表达式未完成，校验失败获取验证码按钮禁用*/}
                    <Form.Item<FieldType>
                        name={"phone"}
                        rules={[{ pattern:/^\+?(86)?1[3-9]\d{9}$/, message: '请输入有效的手机号！' },{required: true, message: '请输入手机号！'}]}

                    >
                        <Input name={"phone"} placeholder={"手机号"} size='large' onChange={handleInputChange} maxLength={11}/>

                    </Form.Item>
                    <Form.Item<FieldType>
                        name="verification"
                        rules={[{required: true, message: '请输入验证码！'}]}
                    >
                        <Space>
                            <Input placeholder={"请输入验证码"} size='large'/>
                            <Button type="primary" size='large' onClick={handleButtonClick} >
                                获取验证码
                            </Button>
                        </Space>
                    </Form.Item>
                    <Form.Item>
                        <Button
                            className={"registerSubmit"}
                            size='large'
                            type='primary'
                            block
                            htmlType='submit'
                        >
                            注册
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Register;
