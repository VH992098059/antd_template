import React from "react";
import {Menu} from "antd";
import {Header} from "antd/es/layout/layout";
import AvaterModel from "./AvaterModel/AvaterModel.tsx";
const items = new Array(15).fill(null).map((_, index) => ({
    key: index + 1,
    label: `nav ${index + 1}`,
}));
const HeaderModel : React.FC = () => {
  return (
      <Header style={{ display: 'flex', alignItems: 'center' }}>
          <div className="demo-logo" />
          <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              items={items}
              style={{ flex: 1, minWidth: 0 }}
          />
          <AvaterModel/>
      </Header>
  )
}
export default HeaderModel;
