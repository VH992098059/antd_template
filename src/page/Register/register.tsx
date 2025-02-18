import React, { useState} from "react";
import {Button, Form, type FormProps, Input, Space} from "antd";
import "./register.scss"
import {AliyunGetCode} from "../../api/user/registerApi/AliyunCode.tsx";
import {RegisterUser} from "../../api/user/registerApi/registerApi.tsx";

type FieldType = {
    nickname: string,
    username?: string;
    password?: string;
    phone?: string;
    type?:string;
    verification?: string;
};
type FieleSame={
    samepassword?: string,
}

const Register: React.FC = () =>{
    const [phone, setPhone] = useState<string>('');
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
    };
    const handleButtonClick = () => {
        AliyunGetCode(phone)
    };
    const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const isSuccess = await RegisterUser(values);
        if (isSuccess) {
            window.history.back() // 成功后跳转
        }

        console.log('Success:', values);
    };
    return (
        <div className={"registerBackground"}>

            <div className={"register"}>
                <Button 
                    className={"loginReturn"} 
                    type={"primary"} 
                    danger 
                    onClick={() => window.history.back()}
                >
                    返回
                </Button>
                <div className={"title"}>用户注册</div>
                <div className={"subTitle"}>User Register</div>
                <Form name='basic' className={"registerForm"} initialValues={{remember: true}} onFinish={onFinish}>
                    <Form.Item<FieldType> name='nickname' rules={[{required: true, message: '请输入昵称！'}]}>
                        <Input placeholder='昵称' size='large'/>
                    </Form.Item>
                    <Form.Item<FieldType> name='username' rules={[{required: true, message: '请输入账号！'}]}>
                        <Input placeholder='账号' size='large'/>
                    </Form.Item>
                    <Form.Item<FieldType> name='type' hidden={true} initialValue={"普通用户"}></Form.Item>
                    <Form.Item<FieldType> name='password' rules={[{required: true, message: '请输入密码！'},{min:6,message:"密码不少于6位"}]}>
                        <Input.Password placeholder='密码' autoComplete='new-password' size='large'/>
                    </Form.Item>
                    <Form.Item<FieleSame>
                        name='samepassword'
                        rules={[
                            { required: true, message: '请再次输入密码！' },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('两次输入的密码不一致！'));
                                },
                            }),
                        ]}
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
