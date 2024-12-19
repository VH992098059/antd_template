import React from 'react';
import { Button, Card, Flex, Typography } from 'antd';
import "./FlexCenter.scss"
import {FireOutlined} from "@ant-design/icons";
const cardStyle: React.CSSProperties = {
    width: 400,
};

const imgStyle: React.CSSProperties = {
    display: 'block',
    width: 200,

};

const FlexCenter: React.FC = () => (
   <div>
       <Flex gap={"middle"} vertical={true}>
           <span style={{fontSize: "x-large", fontWeight: "bolder", padding: "0 25px"}}>热门活动</span>
           <Flex gap="middle" justify={'space-around'} style={{flexWrap: 'wrap'}}>

               <Card hoverable style={cardStyle} styles={{body: {padding: 0, overflow: 'hidden'}}}>
                   <Flex justify="space-between">
                       <img
                           alt="avatar"
                           src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                           style={imgStyle}
                       />
                       <Flex vertical align="flex-end" justify="space-between" style={{padding: 20}}>
                           <Typography.Title level={5}>
                               “你好，我是测试，我看看这个width有多大！”
                           </Typography.Title>
                           <span id={"hot"}><FireOutlined />&nbsp;33859</span>
                       </Flex>
                   </Flex>
               </Card>
               <Card hoverable style={cardStyle} styles={{body: {padding: 0, overflow: 'hidden'}}}>
               <Flex justify="space-between">
                       <img
                           alt="avatar"
                           src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                           style={imgStyle}
                       />
                       <Flex vertical align="flex-end" justify="space-between" style={{padding: 20}}>
                           <Typography.Title level={5}>
                               “你好，我是测试，我看看这个width有多大！”
                           </Typography.Title>
                           <Button type="primary" href="https://ant.design" target="_blank">
                               参加活动
                           </Button>
                       </Flex>
                   </Flex>
               </Card>
               <Card hoverable style={cardStyle} styles={{body: {padding: 0, overflow: 'hidden'}}}>
                   <Flex justify="space-between">
                       <img
                           alt="avatar"
                           src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                           style={imgStyle}
                       />
                       <Flex vertical align="flex-end" justify="space-between" style={{padding: 20}}>
                           <Typography.Title level={5}>
                               “你好，我是测试，我看看这个width有多大！”
                           </Typography.Title>
                           <Button type="primary" href="https://ant.design" target="_blank">
                               参加活动
                           </Button>
                       </Flex>
                   </Flex>
               </Card>
               <Card hoverable style={cardStyle} styles={{body: {padding: 0, overflow: 'hidden'}}}>
                   <Flex justify="space-between">
                       <img
                           alt="avatar"
                           src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                           style={imgStyle}
                       />
                       <Flex vertical align="flex-end" justify="space-between" style={{padding: 20}}>
                           <Typography.Title level={5}>
                               “你好，我是测试，我看看这个width有多大！”
                           </Typography.Title>
                           <Button type="primary" href="https://ant.design" target="_blank">
                               参加活动
                           </Button>
                       </Flex>
                   </Flex>
               </Card>
           </Flex>
           {/*全部活动*/}
           <span style={{fontSize: "x-large", fontWeight: "bolder", padding: "0 25px"}}>全部活动</span>
           <Flex gap="middle" justify={'space-around'} style={{flexWrap: 'wrap'}}>
               <Card hoverable style={cardStyle} styles={{body: {padding: 0, overflow: 'hidden'}}}>
                   <Flex justify="space-between">
                       <img
                           alt="avatar"
                           src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                           style={imgStyle}
                       />
                       <Flex vertical align="flex-end" justify="space-between" style={{padding: 20}}>
                           <Typography.Title level={5}>
                               “你好，我是测试，我看看这个width有多大！”
                           </Typography.Title>
                           <Button type="primary" href="https://ant.design" target="_blank">
                               参加活动
                           </Button>
                       </Flex>
                   </Flex>
               </Card>
               <Card hoverable style={cardStyle} styles={{body: {padding: 0, overflow: 'hidden'}}}>
                   <Flex justify="space-between">
                       <img
                           alt="avatar"
                           src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                           style={imgStyle}
                       />
                       <Flex vertical align="flex-end" justify="space-between" style={{padding: 20}}>
                           <Typography.Title level={5}>
                               “你好，我是测试，我看看这个width有多大！”
                           </Typography.Title>
                           <span id={"hot"}>33859</span>
                       </Flex>
                   </Flex>
               </Card>
               <Card hoverable style={cardStyle} styles={{body: {padding: 0, overflow: 'hidden'}}}>
                   <Flex justify="space-between">
                       <img
                           alt="avatar"
                           src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                           style={imgStyle}
                       />
                       <Flex vertical align="flex-end" justify="space-between" style={{padding: 20}}>
                           <Typography.Title level={5}>
                               “你好，我是测试，我看看这个width有多大！”
                           </Typography.Title>
                           <span id={"hot"}>33859</span>
                       </Flex>
                   </Flex>
               </Card>
               <Card hoverable style={cardStyle} styles={{body: {padding: 0, overflow: 'hidden'}}}>
                   <Flex justify="space-between">
                       <img
                           alt="avatar"
                           src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                           style={imgStyle}
                       />
                       <Flex vertical align="flex-end" justify="space-between" style={{padding: 20}}>
                           <Typography.Title level={5}>
                               “你好，我是测试，我看看这个width有多大！”
                           </Typography.Title>
                           <span id={"hot"}>33859</span>
                       </Flex>
                   </Flex>
               </Card>
               <Card hoverable style={cardStyle} styles={{body: {padding: 0, overflow: 'hidden'}}}>
                   <Flex justify="space-between">
                       <img
                           alt="avatar"
                           src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                           style={imgStyle}
                       />
                       <Flex vertical align="flex-end" justify="space-between" style={{padding: 20}}>
                           <Typography.Title level={5}>
                               “你好，我是测试，我看看这个width有多大！”
                           </Typography.Title>
                           <span id={"hot"}>33859</span>
                       </Flex>
                   </Flex>
               </Card>
               <Card hoverable style={cardStyle} styles={{body: {padding: 0, overflow: 'hidden'}}}>
                   <Flex justify="space-between">
                       <img
                           alt="avatar"
                           src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                           style={imgStyle}
                       />
                       <Flex vertical align="flex-end" justify="space-between" style={{padding: 20}}>
                           <Typography.Title level={5}>
                               “你好，我是测试，我看看这个width有多大！”
                           </Typography.Title>
                           <span id={"hot"}>33859</span>
                       </Flex>
                   </Flex>
               </Card>
               <Card hoverable style={cardStyle} styles={{body: {padding: 0, overflow: 'hidden'}}}>
                   <Flex justify="space-between">
                       <img
                           alt="avatar"
                           src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                           style={imgStyle}
                       />
                       <Flex vertical align="flex-end" justify="space-between" style={{padding: 20}}>
                           <Typography.Title level={5}>
                               “你好，我是测试，我看看这个width有多大！”
                           </Typography.Title>
                           <span id={"hot"}>33859</span>
                       </Flex>
                   </Flex>
               </Card>
               <Card hoverable style={cardStyle} styles={{body: {padding: 0, overflow: 'hidden'}}}>
                   <Flex justify="space-between">
                       <img
                           alt="avatar"
                           src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                           style={imgStyle}
                       />
                       <Flex vertical align="flex-end" justify="space-between" style={{padding: 20}}>
                           <Typography.Title level={5}>
                               “你好，我是测试，我看看这个width有多大！”
                           </Typography.Title>
                           <span id={"hot"}>33859</span>
                       </Flex>
                   </Flex>
               </Card>
           </Flex>
       </Flex>

   </div>
);

export default FlexCenter;
