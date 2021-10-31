import React from 'react';
import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import './style.css'
// import Navbar from 'react-bootstrap/Navbar'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>

            <Navbar collapseOnSelect expand="lg" className="menubar" fixed="top">
                <Container>
                    <NavbarBrand href="/" className = "logo">tourDe</NavbarBrand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link href="/home" className ='menu_item'>Home</Nav.Link>
                            <Nav.Link href="/home/#about" className ='menu_item'>About</Nav.Link>
                            <Nav.Link href="/home/#featured" className ='menu_item'>Featured</Nav.Link>
                            <Nav.Link href="/home/#trusted" className ='menu_item'>Trusted</Nav.Link>
                            <Nav.Link href="#pricing" className ='menu_item'>Contact</Nav.Link>
                        </Nav>
                        <Nav>
                            <nav>
                                {
                                    user.email &&
                                    <button className='d_btn'>My Booking</button>
                                }
                            </nav>
                            <nav>
                                {
                                    user.email &&
                                    <span className='d_name'>{user.displayName}</span>
                                }
                                {
                                    user.email ?
                                        <button onClick={logOut} className='d_btn'>Logout</button>
                                        :
                                        <NavLink to="/login" className='d_btn'>Login</NavLink>
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