import React from 'react';
import { Carousel } from 'react-bootstrap';


const Doctors = () => {
    return (
        <div>
            <h2>hi</h2>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-50"
                        src="https://i.ibb.co/h2mcb4r/national-cancer-institute-u-Vn-Ra6m-OLOM-unsplash.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-50"
                        src="https://i.ibb.co/8g9TSC1/national-cancer-institute-DK-4-VWK1tw-unsplash.png"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-50"
                        src="https://i.ibb.co/KspPC91/images-4.png"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-50"
                        src="https://i.ibb.co/n3gVjbt/ani-kolleshi-7jjn-J-QA9f-Y-unsplash.png"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Doctors;