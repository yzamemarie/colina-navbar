import React, { Component, useState } from 'react';
import {Form, Button, Card, Container, Input, InputGroup, Row, Col} from 'react-bootstrap';
 
const handleRegister = (event) => {
    event.preventDefault();
    alert('YOU TRIED TO SUBMIT REGISTRATION!');
  };

function Register() {
    return (
        <div>
        <Container fluid className='d-flex align-items-center justify-content-center'>
            <div className='mask gradient-custom-3'></div>
            <Card className='m-5' style={{maxWidth: '600px'}}>
                <Card.Body className='px-5'>
                    <Row>
                        <Col>
                            <InputGroup classname="mb-3">
                            <InputGroup.Text id="firstname">First Name</InputGroup.Text>
                            <Form.Control
                                placeholder="First Name"
                                aria-label="First Name"
                            />
                            </InputGroup>
                        </Col>
                        <Col>
                        <InputGroup classname="mb-3">
                            <InputGroup.Text id="lastname">Last Name</InputGroup.Text>
                            <Form.Control
                                placeholder="Last Name"
                                aria-label="Last Name"
                            />
                            </InputGroup>
                        </Col>
                    </Row>

                    <Row>
                        <InputGroup classname="mb-3">
                            <InputGroup.Text id="email" type="email">Email</InputGroup.Text>
                            <Form.Control
                                placeholder="First Name"
                                aria-label="First Name"
                            />
                        </InputGroup>
                    </Row>

                    <Row>
                        <InputGroup classname="mb-3">
                            <InputGroup.Text id="password" type="password">Pasword</InputGroup.Text>
                            <Form.Control
                                placeholder="Password"
                                aria-label="Password"
                            />
                        </InputGroup>
                    </Row>

                    <Row>
                        <InputGroup classname="mb-3">
                            <InputGroup.Text id="repeatPassword" type="password">Repeat Password</InputGroup.Text>
                            <Form.Control
                                placeholder="Repeat Password"
                                aria-label="Repeat Password"
                            />
                        </InputGroup>
                    </Row>
                    
                    <center>
                        <Button size='lg' variant="dark" type="submit">Register</Button>
                    </center>

                </Card.Body>
            </Card>
        </Container>
        </div>
    );
}

export default Register;