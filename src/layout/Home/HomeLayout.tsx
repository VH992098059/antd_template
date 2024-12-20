import React from 'react';
import {Layout, theme} from 'antd';
import HeaderModel from "../../page/Home/HeaderModel/HeaderModel.tsx";
import ActivityPage from "../../page/Activity/ActivityPage.tsx";


const { Content, Footer } = Layout;



const Home: React.FC = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

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
                    {/*<ContentBody/>*/}
                    <ActivityPage/>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Ant Design ©{new Date().getFullYear()} Created by 牛马哥
            </Footer>
        </Layout>
    );
};

export default Home;
