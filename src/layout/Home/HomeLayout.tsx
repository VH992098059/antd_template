import React from 'react';
import {Layout, theme} from 'antd';
import HeaderModel from "./HeaderModel/HeaderModel.tsx";
import { useOutlet} from "react-router-dom";
import "./HomeLayout.scss"

const { Content, Footer } = Layout;



const Home: React.FC = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const currentOutlet = useOutlet()
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
            <Footer style={{ textAlign: 'center' }}>
                Ant Design ©{new Date().getFullYear()} Created by 牛马哥
            </Footer>
        </Layout>
    );
};

export default Home;
