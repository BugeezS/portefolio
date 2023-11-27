import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
export const Skills = () => {
    const responsive = {
        surperLargeDesktop: {
            breakpoint: { max: 4000, min: 1200 },
            items: 5
        },
        desktop: {
            breakpoint: { max:3000, min: 768 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464},
            items:2
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }

    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                 <Col>
                        <div className="skill-bx">
                        <h2>
                            Skills
                        </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum nisi id mollis consequat. Ut sed felis semper, convallis leo in, vestibulum urna. Morbi tincidunt est a eleifend pellentesque. Morbi pharetra varius velit sed laoreet. Nullam imperdiet aliquam tortor. Proin eleifend metus sit amet efficitur facilisis. Donec tristique gravida elementum. In vitae maximus dui.</p>   
                        <Carousel responsive={responsive} infinite={true} className="skills-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Brand Identity</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                        </Carousel>
                        </div>
                 </Col>
             </Row>
         </Container>
         <img className="background-image-left" src={colorSharp}/>
        </section>
    )
}