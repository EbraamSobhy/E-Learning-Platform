import React from "react";
import './categories.css';
import { Card, Row, Col } from 'react-bootstrap';
import frontend from './frontend.jpg';
import backend from './Back-End.webp';
import mobile from './mobile.jpg';
import security from './cybersecurity.jpg';
import course from './programming course.png';

function Categories() {
    return (
        <div className="categories">
            <h1 className="Courses">Top Courses <span><img src={course} alt="description" style={{ width: '60px', height: '60px' }} /></span></h1>
            <br />
            <Row>
                <Col>
                    <Card className="category-card">
                        <Card.Img variant="top" src={frontend} className="card-image" />
                        <Card.Body>
                            <Card.Title>Front-End Development</Card.Title>
                            <hr />
                            <Card.Text>Learn the latest in front-end technologies and frameworks.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="category-card">
                        <Card.Img variant="top" src={backend} className="card-image" />
                        <Card.Body>
                            <Card.Title>Back-End Development</Card.Title>
                            <hr />
                            <Card.Text>Master the server-side of web development.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="category-card">
                        <Card.Img variant="top" src={mobile} className="card-image" />
                        <Card.Body>
                            <Card.Title>Mobile App Development</Card.Title>
                            <hr />
                            <Card.Text>Build native and cross-platform mobile applications.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="category-card">
                        <Card.Img variant="top" src={security} className="card-image" />
                        <Card.Body>
                            <Card.Title>Cyber Security</Card.Title>
                            <hr />
                            <Card.Text>Protect systems and data with advanced security practices.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Categories;
