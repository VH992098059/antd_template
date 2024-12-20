import React from "react";
import {Col, Flex, Row} from "antd";
import CarouselHeader from "../Home/Content/CarouselHeader/CarouselHeader.tsx";
import "./ActivityPage.scss"
import ActivityMessage from "./ActivityMessage/ActivityMessage.tsx";
import ActivityMore from "./ActivityMore/ActivityMore.tsx";

const ActivityPage:React.FC = () => {
    return (
        <Flex gap="middle"  vertical={true} id={"activity-header"} >
            <Row style={{display: "flex", justifyContent: "space-around"}}>
                <Col  style={{flex: "0 0 30%"}}>
                    <CarouselHeader/>
                </Col>
                <Col id={"activity_messages"} >
                    <ActivityMessage/>
                </Col>
            </Row>
            <Row style={{display: "flex", justifyContent: "space-around"}}>

                <Col >
                    <ActivityMore/>
                </Col>
            </Row>
        </Flex>
    );
}
export default ActivityPage;
