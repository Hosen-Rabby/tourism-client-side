import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

const BookingItem = () => {
    const { id } = useParams();
    console.log(id)
    const [booking, setBooking] = useState({});
    // console.log(booking)

    const { name, img } = booking;

    useEffect(() => {
        fetch(`https://infinite-garden-22161.herokuapp.com/booking/${id}`)

            .then(res => res.json())
            .then(data => setBooking(data));

    }, [])


    return (
        <div>
            <NavLink to="/shipping">Book Now</NavLink>
            <h1>{name}</h1>
            <img src={img}></img>
        </div>
    );
};

export default BookingItem;