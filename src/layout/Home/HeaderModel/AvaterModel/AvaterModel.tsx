import {Avatar, Badge, Dropdown, MenuProps} from "antd";
import {UserOutlined} from "@ant-design/icons";
const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                个人信息
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                系统信息
            </a>
        ),
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                退出登录
            </a>
        ),
    },
];
const AvaterModel:React.FC = () => {
    return (
        <Badge count={1}>
            <Dropdown menu={{items: items}} placement="bottom">
                <Avatar shape="square" icon={<UserOutlined />} />
            </Dropdown>
        </Badge>
    )
}
export default AvaterModel;
