import React, { useState } from "react";
import type { UploadFile, UploadProps } from 'antd';
import { Card, Avatar, Descriptions, Typography, Input, DatePicker, Select, Upload, message } from "antd";
import { MailOutlined, EditOutlined, UploadOutlined, UserOutlined, PhoneOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn"; // 导入中文包
import zhCN from "antd/locale/zh_CN";
dayjs.locale("zh-cn");
const { Title, Paragraph } = Typography;
const { Option } = Select;

export const ProFile = () => {
  const [avatar, setAvatar] = useState("https://via.placeholder.com/64"); // 默认头像
  const [name, setName] = useState("你停哥夏侯");
  const [editingName, setEditingName] = useState(false);

  const [email, setEmail] = useState("niuma9920@gmail.com");
  const [editingEmail, setEditingEmail] = useState(false);

  const [birthday, setBirthday] = useState("1990年3月1日");
  const [editingBirthday, setEditingBirthday] = useState(false);

  const [gender, setGender] = useState("男");
  const [editingGender, setEditingGender] = useState(false);

  const [phone, setPhone] = useState("18181818181");
  const [editingPhone, setEditingPhone] = useState(false);
  // 头像上传
  // 类型定义
  type UserProfile = {
    name: string;
    email: string;
    birthday: string;
    gender: string;
    phone: string;
    avatar: string;
  };

  // 表单验证规则
  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: string) => {
    return /^1[3-9]\d{9}$/.test(phone);
  };

  const handleAvatarChange: UploadProps['onChange'] = (info) => {
    if (info.file.status === "done") {
      // 假设服务器返回的图片 URL
      const imageUrl = URL.createObjectURL(info.file.originFileObj);
      setAvatar(imageUrl);
      message.success("头像上传成功！");
    }
  };

  // 保存个人信息
  const handleSave = async () => {
    try {
      const profileData: UserProfile = {
        name,
        email,
        birthday,
        gender,
        phone,
        avatar
      };

      // 表单验证
      if (!validateEmail(email)) {
        message.error('请输入有效的电子邮件地址');
        return;
      }

      if (!validatePhone(phone)) {
        message.error('请输入有效的手机号码');
        return;
      }

      // 这里可以添加实际保存逻辑
      message.success('个人信息保存成功！');
    } catch (error) {
      message.error('保存失败，请重试');
    }
  };

  return (
    <div style={{ maxWidth: 800, margin: "auto", padding: 24 }}>
      {/* 页面标题 */}
      <Title level={2} style={{ textAlign: "center" }}>
        个人信息
      </Title>
      <Paragraph style={{ textAlign: "center", color: "#666" }}>
        您在各种服务中的个人信息和偏好设置
      </Paragraph>

      {/* 个人资料卡片 */}
      <Card style={{ marginTop: 24 }}>
        <Title level={4}>基本信息</Title>
        <Descriptions bordered column={1} style={{ marginTop: 16 }}>
          {/* 头像上传 */}
          <Descriptions.Item label="个人资料照片">
            <Upload
              showUploadList={false}
              beforeUpload={() => true} // 这里可以加上传限制
              onChange={handleAvatarChange}
            >
              <Avatar size={64} src={avatar} icon={<UserOutlined />} style={{ cursor: "pointer" }} />
              <UploadOutlined style={{ marginLeft: 10, cursor: "pointer" }} />
            </Upload>
          </Descriptions.Item>

          {/* 姓名（可编辑） */}
          <Descriptions.Item label="姓名">
            {editingName ? (
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                onPressEnter={() => setEditingName(false)}
                onBlur={() => setEditingName(false)}
                autoFocus
              />
            ) : (
              <span onClick={() => setEditingName(true)} style={{ cursor: "pointer" }}>
                {name} <EditOutlined style={{ marginLeft: 8 }} />
              </span>
            )}
          </Descriptions.Item>

          {/* 生日（可编辑） */}
          
          <Descriptions.Item label="生日">
            {editingBirthday ? (
              <DatePicker
                value={birthday ? dayjs(birthday, "YYYY年M月D日") : null}
                onChange={(date, dateString) => {
                  setBirthday(dateString);
                }}
                onOpenChange={(open) => {
                  // 当弹层关闭时退出编辑模式
                  if (!open) {
                    setEditingBirthday(false);
                  }
                }}
                format="YYYY年M月D日"
              />
            ) : (
              <span onClick={() => setEditingBirthday(true)} style={{ cursor: "pointer" }}>
                {birthday} <EditOutlined style={{ marginLeft: 8 }} />
              </span>
            )}
          </Descriptions.Item>



          {/* 性别（可编辑） */}
          <Descriptions.Item label="性别">
            {editingGender ? (
              <Select
                defaultValue={gender}
                onChange={(value) => {
                  setGender(value);
                  setEditingGender(false);
                }}
                onBlur={() => setEditingGender(false)}
                autoFocus
              >
                <Option value="男">男</Option>
                <Option value="女">女</Option>
                <Option value="其他">其他</Option>
              </Select>
            ) : (
              <span onClick={() => setEditingGender(true)} style={{ cursor: "pointer" }}>
                {gender} <EditOutlined style={{ marginLeft: 8 }} />
              </span>
            )}
          </Descriptions.Item>
        </Descriptions>
      </Card>

      {/* 联系信息卡片 */}
      <Card style={{ marginTop: 24 }}>
        <Title level={4}>联系信息</Title>
        <Descriptions bordered column={1} style={{ marginTop: 16 }}>
          {/* 电子邮件（可编辑） */}
          <Descriptions.Item label="电子邮件">
            {editingEmail ? (
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onPressEnter={() => setEditingEmail(false)}
                onBlur={() => setEditingEmail(false)}
                autoFocus
              />
            ) : (
              <span onClick={() => setEditingEmail(true)} style={{ cursor: "pointer" }}>
                <MailOutlined /> {email} <EditOutlined style={{ marginLeft: 8 }} />
              </span>
            )}
          </Descriptions.Item>
          {/* 手机号码（可编辑） */}
          <Descriptions.Item label="手机号码">
            {editingPhone ? (
              <Input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                onPressEnter={() => setEditingPhone(false)}
                onBlur={() => setEditingPhone(false)}
                autoFocus
              />
            ) : (
              <span onClick={() => setEditingPhone(true)} style={{ cursor: "pointer" }}>
                <PhoneOutlined /> {phone} <EditOutlined style={{ marginLeft: 8 }} />
              </span>
            )}
          </Descriptions.Item>
        </Descriptions>

      </Card>
 
    </div>
  );
};
