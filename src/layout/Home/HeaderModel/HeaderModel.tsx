import React, {useEffect, useRef, useState} from "react";
import { useLocation } from "react-router-dom";
import {Dropdown, Menu, MenuProps, message} from "antd";
import {Header} from "antd/es/layout/layout";
import AvaterModel from "./AvaterModel/AvaterModel.tsx";
import {GiftOutlined, HomeOutlined, SearchOutlined} from "@ant-design/icons";
import { JSX } from "react/jsx-runtime";
import {useNavigate} from "react-router-dom";
import Search from "antd/es/input/Search";


function getItem(label: string, key: string, icon: JSX.Element, children: string) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const menuItems = [
    getItem("首页", '/home', <HomeOutlined/>, ""),
    getItem("活动", '/activity', <GiftOutlined/>, ""),

];


const HeaderModel: React.FC = () => {
    const location = useLocation();
    const [selectedKey, setSelectedKey] = useState(location.pathname);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState('');
    const [useOpen,setOpen]=useState(false)
    const searchRef = useRef<any>(null);
    const isOpen=()=>{
        const intervalId = window.setInterval(() => {
            searchRef.current.input.focus()
          }, 400);
        setOpen(true)
        return () => {
            window.clearInterval(intervalId);
        };
    }
    const isBulr=()=>{
        setOpen(false)
        
    }
    const homeClick = (val: never) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        navigate(val.key);
    }
    const searchClick = (res: string) => {
        if (res === "") {
            return message.error("请输入内容")
        }
        
        if (location.pathname === '/search') {
            navigate(`/search?content=${res}`);
            window.location.reload();
        } else {
            window.open(`/search?content=${res}`, '_blank');
        }
        
        // 清空搜索框
        setSearchValue('');
    }
    useEffect(() => {
        setSelectedKey(location.pathname);
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    })
    /*获取浏览器像素宽度*/
    const styleWidth=windowWidth>768?"350px":"200px"
    const paddingLeftWidth=windowWidth>768?"":"0"
    const paddingRightWidth=windowWidth>768?"":"10px"
    const items: MenuProps['items'] =[
        {
            key: '1',
            label: <Search 
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
                placeholder={"请搜索内容"} 
                enterButton={"搜索"} 
                id={"search"} 
                ref={searchRef}
                style={{width:styleWidth}} 
                onSearch={searchClick}
                onBlur={isBulr}
            />,
        },
    ]
    
    return (
        <Header  style={{
            position: 'sticky',
            top: 0,
            zIndex: 1,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            paddingLeft:paddingLeftWidth,
            paddingRight:paddingRightWidth
        }}>
            <div className="demo-logo"/>
            <Menu
                theme="dark"
                mode="horizontal"
                selectedKeys={[selectedKey]}
                items={menuItems}
                style={{flex: 1, minWidth: 0,padding:0}}
                /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
                // @ts-expect-error
                onClick={homeClick}
            />
            {
                windowWidth>768?<Search 
                    value={searchValue}
                    onChange={e => setSearchValue(e.target.value)}
                    placeholder={"请搜索内容"} 
                    enterButton={"搜索"} 
                    id={"search"} 
                  
                    style={{width:styleWidth}} 
                    onSearch={searchClick}
                    
                />:<Dropdown menu={{items}} open={useOpen} autoFocus={true} ><button style={{backgroundColor:"#1677ff"}} onClick={isOpen} ><SearchOutlined/></button></Dropdown>
            }
            &nbsp;
            &nbsp;
            <AvaterModel/>

        </Header>
        
    )
};
export default HeaderModel;
