import React from 'react';
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
        .btn-success,.btn-secondary {
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
                <Navbar.Brand href="#home"><img className='logo' src={logo} alt="" /></Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#features">Home</Nav.Link>
                    <Nav.Link href="#pricing">Tutorials</Nav.Link>
                    <NavDropdown title="Courses" id="collapsible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Web Development</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Mobile Application Development
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                            AI & Machine Learning
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Cyber Security</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            UI/UX Web Design
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link size="lg" href="#" id='register'><Button variant="success">Sign Up</Button>{' '}</Nav.Link>
                    <Nav.Link id='register1' eventKey={2} href="#">
                    <Button variant="secondary">Login In</Button>{' '}
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </div>
    )
}

export default NavBar;
