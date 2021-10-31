import React from 'react';
import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
// import Navbar from 'react-bootstrap/Navbar'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className ="sticky-top">
                <Container>
                    <NavbarBrand href="#home">tripo</NavbarBrand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                        <Nav>
                            <nav>
                                {
                                    user.email &&
                                    <button>My Booking</button>
                                }
                                {
                                    user.email &&

                                    <span>{user.displayName}</span>
                                }
                                {
                                    user.email ?
                                        <button onClick={logOut}>Logout</button>
                                        :
                                        <NavLink to="/login">Login</NavLink>
                                }


                            </nav>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;