import React from 'react';
import { Button, Result } from 'antd';
import {useNavigate} from "react-router-dom";


const Not_found: React.FC = () => {
    const navigate = useNavigate();
    console.log(window.history.length)
    return (
        <Result
            style={{backgroundColor: "white", height: "100vh"}}
            status="404"
            title="404"
            subTitle="哦吼，页面不存在！"
            extra={
                <Button type="primary" onClick={()=>{navigate(-1)}}>
                    返回上一页
                </Button>
            }
        />
    )
};

export default Not_found;
