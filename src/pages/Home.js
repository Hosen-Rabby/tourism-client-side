import React from 'react';
import { Container, Row, Col,Image } from 'react-bootstrap';
import Booking from './Booking';
import './style.css'

const Home = () => {
    return (
        <div>
            {/* banner start */}
            <div className="banner">
                <Container>
                    <Row>
                        <Col md={8}>
                            <h1>Find your next <span>tour</span></h1>
                            <h4>Where would you like to go?</h4>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* end of banner */}

            {/* call to book start */}
            <div id='about' className='call_to_book'>
                <Container>
                    <Row>
                        <Col lg={2}></Col>
                        <Col lg={8}>
                            <h6 className="orange_text">
                                CALL OUR AGENTS TO BOOK!
                            </h6>
                            <h2>
                                TourDe Award Winning and Top
                                Rated Tour Operator
                            </h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3}>
                            <div className='call_item'>
                                <p>8000+ Our Local Guides</p>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className='call_item'>
                                <p>100% Trusted Tour Agency</p>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className='call_item'>
                                <p>28+ Years of Travel Experience</p>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className='call_item'>
                                <p>98% Our Travelers are Happy</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* call to book end */}

            {/* booking start */}

            <div id='featured' className='booking'>
                <Booking></Booking>
            </div>

            {/* booking end */}


            {/* trust start */}

            <div id='trusted' className='trust'>
                <div className='trust_top'>
                    <div className='trust_overlay'>
                        <Container>
                            <Row>
                                <Col lg={2} sm={0}></Col>
                                <Col lg={8} sm={12}>
                                    <h6 className="orange_text">
                                        Love where you're going
                                    </h6>
                                    <h2>
                                        TourDe is a World Leading
                                        Online Tour Booking Platform
                                    </h2>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>

                <div className='trust_bottom'>
                    <Container>
                        <Row>
                            <Col lg={6} sm={12}>
                                <div className='trust_right'>
                                    <h6 className="orange_text">
                                        TRUSTED & PROFESSIONAL
                                    </h6>
                                    <h2>
                                        We’re Trusted by
                                        More Than
                                        84,106
                                        Clients</h2>
                                    <Col md={8}>
                                    <div className='trustR'>

                                    </div>
                                    </Col>
                                </div>
                            </Col>
                            <Col lg={6} sm={12}>
                                <div className='trustL'>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

            </div>

            {/* trust end */}
        </div>
    );
};

export default Home;