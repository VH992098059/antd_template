
import { Button, Card, Flex, Typography } from 'antd';
import "./FlexCenter.scss"
import {FireOutlined} from "@ant-design/icons";
import {ActivityList} from "../../../../api/activity/activity.tsx";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {getToken} from "../../../../router/token/token.tsx";
const cardStyle: React.CSSProperties = {
    width: 400,
};

const imgStyle: React.CSSProperties = {
    display: 'block',
    width: 200,

};

const Remen=()=>{
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    const GetCardId = (key: string) => {
        if(getToken()===null){
            navigate(`/home/activity?key=${key}`)
        }else{
            navigate(`/home/activity?key=${key}&uuid=${getToken()}`);

        }

    };


    useEffect(() => {
        ActivityList().then((res) => {
            setItems(res);
        });
    }, []);


    return (
        items.map((item) => (
            /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
            // @ts-expect-error
            <Card hoverable style={cardStyle} styles={{body: {padding: 0, overflow: 'hidden'}}} key={item.uuid} onClick={()=>{GetCardId(item.uuid)}}  >
                <Flex justify="space-between">
                    <img
                        alt="avatar"
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        style={imgStyle}
                    />
                    <Flex vertical align="flex-end" justify="space-between" style={{padding: 20}}>
                        <Typography.Title level={5}>
                            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                            { // @ts-expect-error
                                item.activity_title}
                        </Typography.Title>
                        <span id={"hot"}><FireOutlined />&nbsp;33859</span>
                    </Flex>
                </Flex>
            </Card>
        ))
    );

}
const FlexCenter: React.FC = () => (
   <div>
       <Flex gap={"middle"} vertical={true}>
           <span style={{fontSize: "x-large", fontWeight: "bolder", padding: "0 25px"}}>热门活动</span>
           <Flex gap="middle" justify={'space-around'} style={{flexWrap: 'wrap',margin:"30px 0"}}>
               {Remen()}
           </Flex>
           {/*全部活动*/}
           <span style={{fontSize: "x-large", fontWeight: "bolder", padding: "0 25px"}}>全部活动</span>
           <Flex gap="middle" justify={'space-around'} style={{flexWrap: 'wrap',margin:"30px 0"}}>
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
       </Flex>

   </div>
);

export default FlexCenter;
