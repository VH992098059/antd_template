import React from 'react';
import { Button, Result } from 'antd';


const Not_found: React.FC = () => (
    <Result
        style={{backgroundColor:"white",height:"100vh"}}
        status="404"
        title="404"
        subTitle="哦吼，页面不存在！"
        extra={
            <Button type="primary" href={"/"}>
                返回主页
            </Button>
        }
    />
);

export default Not_found;
