import React, {useEffect, useState} from "react";
import {Col, Empty, Flex, Row, Skeleton} from "antd";
import CarouselHeader from "../Home/Content/CarouselHeader/CarouselHeader.tsx";
import "./ActivityPage.scss"
import ActivityMessage from "./ActivityMessage/ActivityMessage.tsx";
import ActivityMore from "./ActivityMore/ActivityMore.tsx";
import MyContent from "./ActivityContent/ActivityContent.tsx"
import {GetActivity} from "../../api/activity/activity.tsx";
/* 活动主页面 */
const ActivityPage:React.FC = () => {
    const [items, setItems] = useState([]);
    const [isListening, setIsListening] = useState(true);
    const [isLoading, setIsLoading] = useState(true); // 添加加载状态
    const params = new URLSearchParams(window.location.search);
    const [activityData, setActivityData] = useState(null);

    useEffect(() => {
        if(!isListening) return
        const fetchData = async () => {
            try {
                setIsLoading(true); // 开始加载
                await GetActivity(params.get('key') as string).then((res) => {
                    setItems(res);
                    setActivityData(res[0]);

                    if(res.length > 0){
                        setIsListening(false);
                    }
                })
            }catch(error) {
                console.log(error)
            }finally {
                setIsLoading(false);

            }
        }
        fetchData()
    }, [isListening])

    useEffect(() => {

        if (activityData?.activity_title) {
            document.title = activityData.activity_title;
        }
        
        return () => {
            document.title = '活动平台';
        };
    }, [activityData?.activity_title]);

    return (

        <>
            {isLoading ? (<Skeleton active /> ):items===undefined ? (
                <Empty description="暂无数据" />):(
                <Flex gap="middle"  vertical={true} id={"activity-header"} >
                    <Row style={{display: "flex", justifyContent: "space-around"}}>
                        <Col  style={{flex: "0 0 30%"}}>
                            <CarouselHeader/>
                        </Col>
                        <Col id={"activity_messages"} >
                            <MyContent.Provider value={{items, setItems}}>
                                <ActivityMessage/>
                            </MyContent.Provider>
                        </Col>
                    </Row>
                    <ActivityMore/>
                </Flex>
            )}
        </>

    );
}
export default ActivityPage;
