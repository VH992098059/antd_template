import {Avatar, Badge, Button, Dropdown, MenuProps} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {clearToken, getToken} from "../../../../router/token/token.tsx";
import {Link} from "react-router-dom";
import {isPastHours} from "../../../../router/privateRoute/PrivateRoute.tsx";
const Logout=()=>{
    clearToken();
    window.location.href = "/";
}
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
            <a target="_blank" rel="noopener noreferrer" onClick={Logout}>
                退出登录
            </a>
        ),

    },
];
const AvaterModel:React.FC = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const token: string= getToken();
    const tokenObj = JSON.parse(token);
    if(tokenObj==null||isPastHours(tokenObj.expired)){
        return (<Link to={"userLayout/login"}><Button type={"primary"}>请登录</Button></Link>)

    }
    return (
        <Badge count={1}>
            <Dropdown menu={{items: items}} placement="bottom">
                <Avatar shape="square" icon={<UserOutlined />} />
            </Dropdown>
        </Badge>
    )

}
export default AvaterModel;
