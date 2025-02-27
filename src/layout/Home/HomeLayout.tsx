import React, { useState } from 'react';
import {Layout, theme} from 'antd';
import HeaderModel from "./HeaderModel/HeaderModel.tsx";
import { useOutlet, useLocation } from "react-router-dom";
import "./HomeLayout.scss"
const { Content, Footer } = Layout;


/* 主页面组件 */
const HomeLayout: React.FC = () => {
    
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const currentOutlet = useOutlet()
    const location = useLocation();
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
