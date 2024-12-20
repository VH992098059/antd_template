import React, {useState} from "react";
import {Menu, MenuProps} from "antd";
import { MailOutlined} from "@ant-design/icons";

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        label: '图文详情',
        key: 'more',
        icon: <MailOutlined />,
    },
    {
        label: '用户评价',
        key: 'rate',
        icon: <MailOutlined />,
    },
    {
        label: '活动推荐',
        key: 'recommend',
        icon: <MailOutlined/>,
    },
];
const ActivityMore:React.FC=()=>{
    const [current, setCurrent] = useState('more');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default ActivityMore;
