import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import logo from './logo.PNG';

function NavBar() {
    return (
        <div>
            <style type="text/css">
            {`
                .btn-success, .btn-secondary {
                    background-color: success;
                    color: white;
                    height: 60px;
                    width: 100px;
                }

                .btn-xxl {
                    padding: 1rem 1.5rem;
                    font-size: 30px;
                }
            `}
            </style>
            <Navbar expand="lg" className="bg-black">
                <Container>
                    <Navbar.Brand as={Link} to="/"><img className='logo' src={logo} alt="Logo" /></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/tutorials" target="_blank">Tutorials</Nav.Link>
                        <NavDropdown title="Courses" id="collapsible-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/content/Front-End" target="_blank">Front-End Web Development</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/content/Backend" target="_blank">Back-End Web Development</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/content/Mobile" target="_blank">Mobile Application Development</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/content/Design" target="_blank">UI/UX Web Design</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link size="lg" href="#" id='register'><Button variant="success">Sign Up</Button>{' '}</Nav.Link>
                        <Nav.Link id='register1' eventKey={2} href="#">
                            <Button variant="secondary">Log In</Button>{' '}
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;
