import React, {useState} from "react";
import {Menu, MenuProps} from "antd";
import { MailOutlined} from "@ant-design/icons";
import ActivityPicMore from "./ActivityPicMore/ActivityPicMore.tsx";
import ActivityUserRate from "./ActivityUserRate/ActivityUserRate.tsx";
import ActivityRecommend from "./ActivityRecommend/ActivityRecommend.tsx";

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

    return (<div>
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
        <div style={{ marginTop: 20 }}>
            {current === 'more' && <ActivityPicMore />}
            {current === 'rate' && <ActivityUserRate/>}
            {current === 'recommend' && <ActivityRecommend />}
        </div>
    </div>);
};
export default ActivityMore;
