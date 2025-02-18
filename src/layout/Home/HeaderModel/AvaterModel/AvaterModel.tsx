import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Badge, Button, Dropdown, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { clearToken, getAuth, getUuid } from '../../../../router/token/token';
import MyContext from "./AvaterContext"
const AvatarModal: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const context=useContext(MyContext)
  const handleLogout = async () => {
    try {
      setDropdownOpen(false);
      clearToken(); // 清除所有认证token
      message.success('退出登录成功');

    } catch (error) {
      message.error('退出登录失败');
    }
  };

  const menuItems: MenuProps['items'] = [
    {
      key: 'user-info',
      label: (
        <div className="px-4 py-2">
          <div className="text-base font-medium" style={{color:"black",fontWeight:"bold"}}>{context[0].length!=0?context[0].nickname:'未命名用户'}</div>
          <div className="text-gray-500 text-xs">{ '暂无账号信息'}</div>
        </div>
      ),
      disabled: true,
    },
    { type: 'divider' },
    {
      key: 'profile',
      label: (
        <Link to="/account/profile" onClick={() => setDropdownOpen(false)}>
          个人中心
        </Link>
      ),
    },
    {
      key: 'settings',
      label: (
        <Link to="/account/settings" onClick={() => setDropdownOpen(false)}>
          账户设置
        </Link>
      ),
    },
    { type: 'divider' },
    {
      key: 'logout',
      label: (
        <a onClick={handleLogout} className="text-red-500">
          安全退出
        </a>
      ),
    },
  ];

  if (!getAuth()||!getUuid()) {
    return (
      <Link to="/userLayout/login">
        <Button type="primary" ghost>
          立即登录
        </Button>
      </Link>
    );
  }

  return (
    <Badge count={1}>
        <Dropdown
          menu={{ items: menuItems }}
          open={dropdownOpen}
          onOpenChange={setDropdownOpen}
          trigger={['click']}
          placement="bottomRight"
          overlayClassName="w-[200px]"
        >
          <Avatar 

            icon={context[0].length!=0?context[0].avatar:<UserOutlined />}
            className="cursor-pointer hover:opacity-80 transition-opacity"
          />
        </Dropdown>
      </Badge>
  );
};

export default AvatarModal;
