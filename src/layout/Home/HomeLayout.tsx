import React, { useState } from 'react';
import {FloatButton, Layout, Modal, theme} from 'antd';
import HeaderModel from "./HeaderModel/HeaderModel.tsx";
import { useOutlet, useLocation } from "react-router-dom";
import "./HomeLayout.scss"
import { MessageOutlined } from '@ant-design/icons';
import { AiChat } from './chat/AiChat.tsx';
const { Content, Footer } = Layout;


/* 主页面组件 */
const HomeLayout: React.FC = () => {
    
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const currentOutlet = useOutlet()
    const location = useLocation();
    const [visible, setVisible] = useState(false);

    const openChat = () => {
        setVisible(true);
    };

    const closeChat = () => {
        setVisible(false);
    };
    /* 指定隐藏url */
    const showFooter = !location.pathname.includes('/activity') && 
                      !location.pathname.includes('/search') && 
                      !location.pathname.includes('/your-new-path');

    return (
        <Layout>
            <HeaderModel/>
            
            
            <Content>
                <div
                    style={{
                        background: colorBgContainer,
                        minHeight: 280,
                        borderRadius: borderRadiusLG,
                    }}
                >
                     {currentOutlet}
                </div>
                <>
                    <FloatButton
                        icon={<MessageOutlined />}
                        style={{ right: 24, bottom: 24 }}
                        onClick={openChat}
                    />
        
                </>
            </Content>
            {showFooter && (
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©{new Date().getFullYear()} Created by 牛马哥
                </Footer>
            )}
        </Layout>
    );
};

export default HomeLayout;
