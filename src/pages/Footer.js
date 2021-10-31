import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style.css';


const Footer = () => {
    return (
        <div className='footer'>
            <Container>
                <Row>
                    <Col lg={4}>
                        <h2>tourDe</h2>
                        <span>Tourde is one of the leading company of Bangladesh for travel and tour guidline.
                            And also set up the all necessary need for tourist to make their tour enjoyable
                        </span>
                    </Col>
                    <Col lg={4}>
                        <h4>Company</h4>
                        <p>Ifter</p>
                        <p>Lukiman</p>
                        <p>Sharjah</p>
                        <p>Kutt</p>
                    </Col>
                    <Col lg={4}>
                    <h4>Important links</h4>
                    <p>Featred</p>
                        <p>Contact</p>
                        <p>About</p>
                        <p>Booking</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;