import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import { NavLink, useParams } from 'react-router-dom';
import './style.css';

const BookingItem = () => {
    const { id } = useParams();
    const [booking, setBooking] = useState({});

    const { name, img, img2, district, longDes } = booking;

    useEffect(() => {
        fetch(`https://infinite-garden-22161.herokuapp.com/booking/${id}`)

            .then(res => res.json())
            .then(data => setBooking(data));

    }, [])


    return (
        <div className='b_booking_item'>
            <div className="featured_img">
                <Image src={img2} className='img-fluid' />

            </div>
            <Container>
                <div className='location'>
                    <Row>
                        <Col md={6}>
                            <h3>{name} <span>-{district}</span></h3>
                        </Col>
                        <Col md={6}>
                            <div className='ship_right'>
                                <NavLink to={`/shipping/${id}`} className='d_btn ship'>Book and Shipping</NavLink>
                            </div>
                        </Col>
                    </Row>
                </div>

                <Row>
                    <Col md={4}>
                        <h2>Overview</h2>
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        <p>{longDes}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BookingItem;