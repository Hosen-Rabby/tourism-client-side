import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Container, Nav, Navbar, NavbarBrand, Row, Col } from 'react-bootstrap';
import useAuth from '../Hooks/useAuth';
import './style.css';



const Shipping = () => {
    const { id } = useParams();
    const [shipping, setShipping] = useState({});

    const { name, img, price } = shipping;

    useEffect(() => {
        fetch(`https://infinite-garden-22161.herokuapp.com/shipping/${id}`)

            .then(res => res.json())
            .then(data => setShipping(data));

    }, [])


    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => console.log(data);
    return (
        <div className='shipping_info'>
            <Container>
                <Row>
                    <Col lg={6}>
                        <h3>Your booked items:</h3>
                        <div className='booked'>
                            <img src={img} className='img-fluid' />
                            <div className ='booked_info'>
                                <h5>{name}</h5>
                                <h6>Total: {price} Tk</h6>
                            </div>
                            <button className='remove'>Remove</button>
                        </div>
                    </Col>
                    <Col lg={6}>

                        <h2>Please provide your shipping information.</h2>
                        <div>
                            <form onSubmit={handleSubmit(onSubmit)} className='form'>
                                <input defaultValue={user.displayName} {...register("name")} />
                                <input defaultValue={user.email} {...register("email")} />
                                <input placeholder='House and Street' {...register("address", { required: true })} />
                                <input placeholder="City" {...register("city")} />
                                <input placeholder="Zip Code" {...register("zip", { required: true })} />
                                <input placeholder='Phone' {...register("phone", { required: true })} />
                                {errors.exampleRequired && <span>This field is required</span>}

                                <input type="submit" />
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Shipping;