import React from "react";
import './categories.css';
import { Card, Row, Col } from 'react-bootstrap';
import frontend from './frontend.jpg';
import backend from './Back-End.webp';
import mobile from './mobile.jpg';
import UI from './ui.jpg';

function Categories() {
    return (
        <div className="categories">
            <h1 className="Courses">Top Courses</h1>
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
                        <Card.Img variant="top" src={UI} className="card-image" />
                        <Card.Body>
                            <Card.Title>UI/UX Web Design</Card.Title>
                            <hr />
                            <Card.Text>Create intuitive and engaging user interfaces and experiences.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Categories;
