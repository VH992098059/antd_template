import React, {useEffect, useState} from "react";
import {Avatar, List, Space} from "antd";
import {LikeOutlined, MessageOutlined} from "@ant-design/icons";
const data = Array.from({ length: 15 }).map((_, i) => ({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=${i}`,
    content:
        '我是傻dsadasdasdasdaddas撒大声地卡时间段哈萨克等哈手打刷卡德哈卡三打哈科技阿萨登记卡四大会计啊手打手机卡逼',
}));

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

const ActivityUserRate:React.FC=()=>{
    /*获取浏览器像素宽度*/
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const styleWidth=windowWidth>768?"760px":windowWidth-50
    return (
        <List
            itemLayout="vertical"
            size="large"
            pagination={{
                onChange: (page) => {
                    console.log(page);
                },
                pageSize: 10,
            }}
            dataSource={data}

            renderItem={(item) => (
                <List.Item
                    key={item.title}
                    actions={[
                        <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                        <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                    ]}
                    style={{width:styleWidth }}
                >
                    <List.Item.Meta
                        avatar={<Avatar src={item.avatar} />}
                        title={<a href={item.href}>{item.title}</a>}
                    />
                    {item.content}
                </List.Item>
            )}
        />
    )
}
export default ActivityUserRate
