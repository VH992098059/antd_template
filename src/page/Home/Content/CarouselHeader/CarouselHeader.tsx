import React from 'react';
import { Carousel } from 'antd';
import "./CarouselHeader.scss";
/*
const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '300px',
    color: '#fff',
    lineHeight: '300px',
    textAlign: 'center',
    background: '#364d79',
};
*/

const CarouselHeader: React.FC = () => (
    <div id="carousel">
        <Carousel arrows autoplay infinite={true} effect="fade" id={"Carousel_Header"}>
            <div>
                <h3 id={"Carousel_body"}>1</h3>
            </div>
            <div>
                <h3 id={"Carousel_body"}>2</h3>
            </div>

        </Carousel>

    </div>
);

export default CarouselHeader;
