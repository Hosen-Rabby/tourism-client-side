import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Booking = () => {
    const [bookings, setBookings] = useState([]);

    // load data
    useEffect(() => {
        fetch('https://infinite-garden-22161.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={3}></Col>
                    <Col lg={6}>
                        <div className='booking_top'>
                            <h6 className="orange_text">
                                FEATURED TOURS

                            </h6>
                            <h2>
                                Most Popular Tours

                            </h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {
                        bookings.map(booking =>
                            <Col lg={4} md={6} key={booking._id}>
                                <img src={booking.img} className='img-fluid'></img>
                                <h2>{booking.name}</h2>
                                <p>{booking.shortDes}</p>
                                <h6>{booking.price} / <spna>Per person</spna></h6>
                                <Link to={`/bookingitem/${booking._id}`}>
                                    <button className="btn btn-warning">Book Now</button>
                                </Link>
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Booking;